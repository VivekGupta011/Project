'use client';
import React, { useState } from 'react';
import { Container } from '../layouts';
import { Plus } from '../icon/plus';
const Question = () => {
  // Define the state to track the open/closed state of each FAQ item
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the open/closed state
  const toggleItem = () => {
    setIsOpen(!isOpen);
  };
  // question and answer
  const faqStyles = {
    border: '#C5C5C5 1px solid',
    padding: '14px',
    borderRadius: '7px',
  };
  return (
    <>
      <Container>
        <>
          <div className="max-w-screen-xl px-5 mx-auto bg-white py-9 min-h-sceen">
            <div className="flex flex-col items-center">
              <h2 className="mt-5 text-xl font-bold tracking-tight">FAQS</h2>
              <p className="mt-3 text-5xl font-bold text-black">
                Frequenty asked questions
              </p>
            </div>
            <div className="grid mx-auto mt-8 divide-y divide-neutral-200">
              <div className="py-5" style={isOpen ? faqStyles : {}}>
                <details className={`group ${isOpen ? 'open' : ''}`}>
                  <summary
                    className="flex items-center justify-between font-medium list-none cursor-pointer"
                    onClick={toggleItem}
                  >
                    <span> How do tapni products work?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                      {/* <svg width="80px" height="40px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                                                <path fill="#000000" fillRule="evenodd" d="M18 10a1 1 0 01-1 1H3a1 1 0 110-2h14a1 1 0 011 1z" />
                                            </svg> */}
                    </span>
                  </summary>
                  <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    sit amet turpis a ligula rutrum tempus. Vestibulum faucibus
                    convallis ante sed lacinia. Nulla ullamcorper urna in erat
                    mollis rutrum.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                    <span> How do I add my details?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                    We offers a variety of billing options, including monthly
                    and annual subscription plans, as well as pay-as-you-go
                    pricing for certain services. Payment is typically made
                    through a credit card or other secure online payment method.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                    <span>
                      {' '}
                      Does the other person need an app to receive my info?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                    We offers a 30-day money-back guarantee for most of its
                    subscription plans. If you are not satisfied with your
                    subscription within the first 30 days, you can request a
                    full refund. Refunds for subscriptions that have been active
                    for longer than 30 days may be considered on a case-by-case
                    basis.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                    <span> Is there a monthly subscription fee?</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                    To cancel your We subscription, you can log in to your
                    account and navigate to the subscription management page.
                    From there, you should be able to cancel your subscription
                    and stop future billing.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex items-center justify-between font-medium list-none cursor-pointer">
                    <span>
                      {' '}
                      What are the benefits of using tapni digital business
                      cards?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height={24}
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width={24}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 text-neutral-600 group-open:animate-fadeIn">
                    We offers a free trial of its platform for a limited time.
                    During the trial period, you will have access to a limited
                    set of features and functionality, but you will not be
                    charged.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </>
      </Container>
    </>
  );
};

export default Question;
