import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Container } from '../layouts';
import BgGradiwnt from '../../../../../public/assests/bgcolor/Rectangle68@2x.png';
import { Aerrow } from '../icon/aerrow';

// Define the prop type using an interface
interface CardSlidersingalProps {
  mobileImage: StaticImageData;
  backgroundimg: StaticImageData;
  width?: number; // Add width prop
  height?: number; // Add height prop
}

const CardSlidersingal: React.FC<CardSlidersingalProps> = ({
  mobileImage,
  backgroundimg,
}) => {
  return (
    <Container>
      <div
        className="max-w-xl flex justify-center px-4 py-8 rounded-tr-[83px]  flex-col overflow-hidden shadow-lg lg:py-9 lg:px-6"
        style={{ background: `url(${backgroundimg.src})` }}
      >
        <div className="flex justify-center">
          <Image
            src={mobileImage}
            alt="External Image"
            width={300}
            height={180}
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-[2rem] mb-2">CRM Export, Simplified</div>
          <div className="mb-2 text-sm font-bold">
            With Vink, easily turn everyone you meet into CRM-ready leads. Say
            goodbye to manual entries
          </div>
          <p className="py-3 text-center">
            {' '}
            <strong>Your CRM? We’re Compatible! -</strong> From Salesforce to
            HubSpot, Microsoft to Pipedrive, our direct integrations ensure
            seamless syncing with your preferred CRM
          </p>
          <p className="py-3 text-center">
            {' '}
            <strong>Team-Ready Solutions -</strong> Centralize and monitor leads
            gathered by your team. Stay informed with data on lead ownership,
            locations, and essential notes.
          </p>
        </div>
        <div className="flex flex-row justify-center">
          <div className="mr-8">
            <button className="px-4 py-2 font-semibold text-black bg-transparent border border-black rounded-full hover:bg-blue-500 hover:text-white hover:border-transparent">
              Get yours now
            </button>
          </div>
          <div>
            <button className="bg-[#FF5B9F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <div className="flex flex-row">
                <div>For Teams</div>
                <div className="flex items-end">
                  <Aerrow />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Container>

  );
};

export default CardSlidersingal;
