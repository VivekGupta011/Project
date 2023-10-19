import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import vinklogolarge from '../../../../../public/assests/logo-vink-org-white@2x.png';
import { Instagram } from '../icon/instagram';
import { Twitter } from '../icon/twitter';
import { Youtube } from '../icon/youtube';
import { Facebook } from '../icon/facebook';

const FooterCompo = () => {
  const mainBGStyle = {
    background: 'linear-gradient(to right, #9C32BB, #FF5B9F)',
    // WebkitTextFillColor: 'transparent',
    // WebkitBackgroundClip: 'text',
  };
  return (
    <>
      {/*Footer container*/}
      <footer
        className="flex flex-col text-center lg:text-left"
        style={mainBGStyle}
      >
        <div className="px-[2rem] py-[4rem]">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center mb-4 md:mb-0">
              <div style={{marginRight:"15%"}}>
              <Link
                className="flex items-center mt-3 mb-4 ml-2 mr-5 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                href="#"
              >
                <Image
                  src={vinklogolarge}
                  alt="External Image"
                  width={150}
                  height={100}
                />
              </Link>
              </div>
              <ul>
                <li>
                  <p className="mb-5 text-xl text-white">
                    24a Church Lane, London, <br /> N2 8DT
                  </p>
                </li>
                <li>
                  <p className="text-xl text-left text-white">
                    hello@vinkcard.co.uk.
                  </p>
                </li>
              </ul>
            </div>
            <div className="flex items-end justify-center mb-4 md:mb-0">
              <ul className="">
                <Link
                  className="flex items-center mt-3 mb-4 ml-2 mr-5 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                  href="/"
                >
                  {' '}
                  <li className="text-2xl mb-2">Home</li>{' '}
                </Link>
                <Link
                  className="flex items-center mt-3 mb-4 ml-2 mr-5 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                  href="/aboutus"
                >
                  {' '}
                  <li className="text-2xl mb-2">About Us</li>{' '}
                </Link>
                <Link
                  className="flex items-center mt-3 mb-4 ml-2 mr-5 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                  href="/shop"
                >
                  {' '}
                  <li className="text-2xl mb-2">Shop</li>{' '}
                </Link>
                <Link
                  className="flex items-center mt-3 mb-4 ml-2 mr-5 text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
                  href="#"
                >
                  {' '}
                  <li className="text-2xl mb-2">Testimonials</li>{' '}
                </Link>
              </ul>
            </div>
            <div className="flex flex-col justify-center mb-4 md:mb-0">
              <h5 className="mb-6 font-medium text-center text-[25px] text-white uppercase">
                Follow Us
              </h5>
              <ul className="flex justify-center">
                <li style={{ padding: '0 10px' }}>
                  <span
                    style={{
                      height: '50px',
                      width: '50px',
                      backgroundColor: '#F6F6F6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Facebook />
                  </span>
                </li>
                <li style={{ padding: '0 10px' }}>
                  <span
                    style={{
                      height: '50px',
                      width: '50px',
                      backgroundColor: '#F6F6F6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Twitter />
                  </span>
                </li>
                <li style={{ padding: '0 10px' }}>
                  <span
                    style={{
                      height: '50px',
                      width: '50px',
                      backgroundColor: '#F6F6F6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Instagram />
                  </span>
                </li>
                <li style={{ padding: '0 10px' }}>
                  <span
                    style={{
                      height: '50px',
                      width: '50px',
                      backgroundColor: '#F6F6F6',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Youtube />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterCompo;
