import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
  faWindowClose,
  faStopCircle,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { capitalize, isEmpty } from '../../utils'
import { RustModule } from '@lib/rust-module'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentAccount, setCurrRoute } from '../../store/actions/sampleAction'

const SUPPORTED_WALLETS = ["nami", "ccvault", "flint" ]
//const SUPPORTED_WALLETS = ["nami"]

type Props = {
  isOpen: boolean
  onClose(open:boolean): any
  children: React.ReactNode
  title: string
}
export function CustomModal({ isOpen, onClose, children, title }: Props) {

  // @ts-ignore
  const storeState = useSelector((state) => state.sampleData);
  const { currentAccount } = storeState;
  const dispatch = useDispatch();
  const [currentWallet, setCurrentWallet] = useState({});
  const [availableWallets, setAvailableWallets] = useState([]);

  const useIsMounted = () => {
    const isMounted = useRef(false)
    // @ts-ignore
    useEffect(() => {
      isMounted.current = true
      return () => (isMounted.current = false)
    }, [])
    return isMounted
  }

  const isMounted = useIsMounted()

  useEffect(() => {
    const fetchData = async () => {
      // @ts-ignore
      let avaiWallets = [];
      SUPPORTED_WALLETS.map(walletName => {
        // @ts-ignore
        if (window.cardano[walletName]){
          // @ts-ignore
          const { apiVersion, icon } = window.cardano[walletName];

          avaiWallets.push({
            name: walletName,
            apiVersion,
            icon
          });
        }
      });

      // @ts-ignore
      setAvailableWallets(avaiWallets);
    }
    if (isMounted.current) {
      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error)
    }
    //ReactGA.send({ hitType: "pageview", page: "/terms-conditions" });
  }, [])

  const onClickWallet = async (walletName:string) => {

    try {
      // @ts-ignore
      const walletIsEnabled = await window.cardano[walletName].isEnabled();
      // @ts-ignore
      if (currentWallet && !isEmpty(currentWallet) && walletIsEnabled) {


        setCurrentWallet({});
        let acc = currentAccount;
        acc.walletName = '';
        // @ts-ignore
        dispatch(setCurrentAccount(acc));

        // @ts-ignore
        window.cardano.off();
      } else {
        try {
          // @ts-ignore
          const cardanoWallet = await window.cardano[walletName].enable();
          //const balance = await cardanoWallet.getBalance();
          //const utxos = await cardanoWallet.getUtxos();
          const balance = await cardanoWallet.getBalance();

          cardanoWallet.walletName = walletName;
          // @ts-ignore
          setCurrentWallet(walletName);

          // @ts-ignore
          dispatch(setCurrentAccount({...currentAccount,...cardanoWallet}));

          onClose(false);
        } catch (e) {
          console.log('Error on enable '+walletName);
          console.log(e);
        }
      }
    } catch (e) {
      console.log('Error on check if '+walletName+' is enabled');
      console.log(e);
    }
  }

  const walletIsEnabled = async (walletName:string) => {
    try {
      // @ts-ignore
      return currentWallet && currentWallet.name && window.cardano[walletName].isEnabled()
    } catch (e) {
      console.log('Error on check if '+walletName+' is enabled');
      console.log(e);
    }
  }
  const onDisconnectWallet = async (walletName:string) => {
    // @ts-ignore
    if (currentWallet && currentWallet.name && window.cardano[walletName].isEnabled()) {
      // @ts-ignore
      window.cardano.off();
    }
  }
  const handleWalletButton = async () => {
    // @ts-ignore
    if (currentWallet && currentWallet.name && window.cardano[walletName].isEnabled()) {
      // @ts-ignore
      window.cardano.off();
    }
  }

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      if (isOpen){
        onClose(false);
      }
    }
  }, []);
  useEffect(() => {

    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);


  const currentWalletName = currentAccount && currentAccount.walletName;
  const isConnected = currentAccount.walletName && currentAccount.walletName.length;
  return (
    <>
      {
        isOpen ?
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t text-slate-500">
                    <h3 className="text-3xl font-semibold">
                      Select wallet
                    </h3>
                    <button
                      className="p-1 ml-10 border-0 float-right text-3xl"
                      onClick={() => onClose(false)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                           className="bi bi-x-circle text-slate-500" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path
                          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                      </svg>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto ">
                    <div className="flex ">
                      {
                        availableWallets
                        && availableWallets.map((wallet,index) => {

                          return <button
                            key={index}
                            // @ts-ignore
                            onClick={() => onClickWallet(wallet.name)}
                            // @ts-ignore
                            style={{border: currentWalletName === wallet.name ? 'solid' : ''}}
                            className={"m-1 p-0 w-16 h-16 block text-black opacity-95 hover:scale-140 shadow-lg shadow-lg hover:shadow-xl hidden md:block right-2 lg:right-10"}>
                            {
                              // @ts-ignore
                              wallet.icon ? <img className="text-md px-2" src={wallet.icon} /> : <span>{capitalize(wallet.name)}</span>
                            }

                          </button>
                        })
                      }
                    </div>
                  </div>
                  <div className="flex text-black ml-8 mb-4">
                    {
                      isConnected ? <>Connected to {capitalize(currentWalletName)}</> : "Select wallet"

                    }
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => onClose(false)}
                    >
                      Close
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
          </>
          : null
      }

    </>
  )
}
