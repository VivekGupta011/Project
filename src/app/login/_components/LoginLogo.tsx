import Image from 'next/image';
import vinklogolarge from '../../../../public/assests/black logo.png';

const LoginLogo = () => {
  return (
    <>
      <div className="flex justify-center h">
        <Image
          src={vinklogolarge}
          alt="External Image"
          width={200}
          height={100}
        />
      </div>
      <div className="flex justify-center">
        <h2 className="py-6 font-semibold text-black">LOG IN</h2>
      </div>
    </>
  );
};

export default LoginLogo;
