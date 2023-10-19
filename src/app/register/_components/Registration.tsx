import { Container } from '@/components/layouts';
import Image from 'next/image';
import RegistrationDetails from './RegistrationDetails';
import RegistrationForm from './RegistrationForm';
import rightbg from "../../../../public/assests/register/register_banner@2x.png";
import RegistrationLogo from './RegistrationLogo';

const Registration = () => {
  return (
    <section>
      <div className="flex items-center lg:flex-row flex-col">
        <div className="lg:w-[60%] lg:block hidden">
          <Image
            src={rightbg}
            alt="banner"
            className="w-full h-full min-h-screen object-cover"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:w-[40%] lg:px-20 px-10 py-7">
          <RegistrationLogo />
          <RegistrationForm />
          <RegistrationDetails />
        </div>
      </div>
    </section>
  );
};

export default Registration;
