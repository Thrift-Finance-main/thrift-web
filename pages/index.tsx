import type { NextPage } from 'next'
import { useAOS } from '../hooks/useAOS'
import { useEffect, useRef, useState } from 'react'
import { RustModule } from '@lib/rust-module'
import { Layout } from '@components/console/Layout/Layout'
import { Home } from '@components/console/Home/Home'
import { useDispatch, useSelector } from "react-redux";
import {
  CONFIG_STORAGE_KEY,
} from '../constants'
import { setCurrRoute } from '../store/actions/sampleAction'
import { getObj } from '../db/LocalStorage'

const Console: NextPage = () => {
  const dispatch = useDispatch();
  useAOS()
  // @ts-ignore
  const storeState = useSelector((state) => state.reduxData);
  const { config } = storeState;
  const [currentRoute, setCurrentRoute] = useState(config.currentRoute);

  const navigateTo = (route:string) => {
    setCurrentRoute(route);
    // @ts-ignore
    dispatch(setCurrRoute(route));
    // Set last
    getObj(CONFIG_STORAGE_KEY).then(config => {
      //storeObj(CONFIG_STORAGE_KEY, config).then(r => {});
    });
  }

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
      const Cardano = await RustModule.CardanoWasm();
      const paymentAddress = await Cardano.BaseAddress.from_address(Cardano.Address.from_bech32('addr1qy0gd5rg9v3mhf8usam98j3tk7rqgdqs0zqammwcp5nscxpm7mazwuz867mpxu2m4u4ec4gqshycdkqyc2lextajzunq2nqwdv'));
      console.log('paymentAddress');
      console.log(paymentAddress);
    }
    if (isMounted.current) {
      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error)
    }
    //ReactGA.send({ hitType: "pageview", page: "/terms-conditions" });
  }, [])
  useEffect(() => {

    // @ts-ignore
    //dispatch(setLoggedUser(isLogged));
  }, [currentRoute])

  return (
    <Layout navigateTo={(route:string) => navigateTo(route)}>
      {renderMain()}
    </Layout>
  )
}

export default Console
