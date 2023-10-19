import { Button } from '@/components/layouts';
import Link from 'next/link';

const RegistrationDetails = () => {
  return (
    <div className="flex flex-col gap-3 text-center py-7">
      <p className="text-xs font-medium text-[#7E7E7E] px-3">
        By clicking the “Sign up” button, you are creating a Vink account and
        therefore you agree to Vink’s Terms of Use and Privacy Policy.
      </p>
      <p className="text-base font-medium text-vink-black-dark">
        Already have an account?
      </p>
      <Link
        href="/login"
        className="text-vink-green-dark border border-vink-green-dark font-medium text-base px-5 py-3.5"
      >
        Login
      </Link>
    </div>
  );
};

export default RegistrationDetails;
