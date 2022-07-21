import { useEffect, useState } from 'react'
import Link from 'next/link'
import cx from 'classnames'
import { GithubButton, TwitterButton, TelegramButton } from './SocialButton'
import {
  SelectWalletModal,
  ConnectWallet,
  useRestoreWallet,
} from '@features/wallet';

export const Header: React.FC = () => {
  const [isSticky, setSticky] = useState(false)

  useRestoreWallet()

  useEffect(() => {
    const listener = () => {
      let value = window.scrollY

      if (value > 200) {
        setSticky(true)
      } else {
        setSticky(false)
      }
    }

    window.addEventListener('scroll', listener, { passive: true })

    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])

  return (
    <>
      <SelectWalletModal />

      <header className={cx('header', { 'sticky-header': isSticky })}>
        <div className="lg:container flex justify-between items-center mx-auto pl-6 lg:pl-0 pr-6 lg:pr-0">
          <nav className="flex justify-between items-center pt-2 pb-2 w-full">
            <Link href="/" passHref>
              <a>
                <div className="logo-box flex items-center justify-center">
                  <img
                    className="rounded-circle mr-4 p-1"
                    style={{ width: 52, height: 'auto' }}
                    src="/logoWhite.png"
                    alt="Cardano Fans Staking Pool - Logo"
                  />
                  <h5 className="text-gray-200 font-semibold text-2xl">
                    Thrift
                  </h5>
                </div>
              </a>
            </Link>
            <ul className="nav-list hidden lg:flex">
              <li className="nav-link">
                <Link href="/#about" passHref>
                  <a>RealFi</a>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="/#cardano" passHref>
                  <a>Wallet</a>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="/#cardano" passHref>
                  <a>About Us</a>
                </Link>
              </li>
              <li className="nav-link">
                <Link href="/#cardano" passHref>
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
            <div className="hidden sm:flex lg:mr-0 items-center mr-6">
              <ConnectWallet />
            </div>
          </nav>
          <div className="mobile-nav lg:hidden">
            <div className="nav-hamburger">
              <input type="checkbox" />
              <span />
              <span />
              <span />

              <div className="menu-container">

                <div className="menu-row">
                  <div className="menu-box">
                    <ul className="menu-items">
                      <li className="nav-link">
                        <Link href="/#about" passHref>
                          <a>RealFi</a>
                        </Link>
                      </li>
                      <li className="nav-link">
                        <Link href="/#cardano" passHref>
                          <a>Wallet</a>
                        </Link>
                      </li>
                      <li className="nav-link">
                        <Link href="/#cardano" passHref>
                          <a>About Us</a>
                        </Link>
                      </li>
                      <li className="nav-link">
                        <Link href="/#cardano" passHref>
                          <a>Contact</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="flex lg:hidden items-center justify-between ml-8 mb-40 w-1/2">
                    <TelegramButton size="md" variant="secondary" />
                    <TwitterButton size="md" variant="secondary" />
                    <GithubButton size="md" variant="secondary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
