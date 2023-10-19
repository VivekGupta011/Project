import { Container } from '@/components/layouts';
import Image from 'next/image';
import LoginLogo from './LoginLogo';
import LoginForm from './LoginForm';
import LoginDetail from './LoginDetail';
import rightbg from '../../../../public/assests/register/register_banner@2x.png';

const Login = () => {
  return (
    <section>
      <div className="flex flex-col items-center lg:flex-row">
        <div className="lg:w-[60%] lg:block hidden">
          <Image
            src={rightbg}
            alt="banner"
            className="object-cover w-full h-full min-h-screen"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:w-[40%] lg:px-20 px-10 py-7">
          <LoginLogo />
          <LoginForm />
          <LoginDetail />
        </div>
      </div>
    </section>
  );
};

export default Login;
