import Image from 'next/image';
import vinklogolarge from '../../../../public/assests/black logo.png';

const RegistrationLogo = () => {
  return (
    <Image
      src={vinklogolarge}
      width={500}
      height={500}
      alt="logo"
      className="object-cover mx-auto w-[150px] h-[50px] mb-12"
    />
  );
};

export default RegistrationLogo;
