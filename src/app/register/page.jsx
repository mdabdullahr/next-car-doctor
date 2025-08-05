import Image from "next/image";
import RegisterForm from "./components/RegisterForm";

const Register = () => {
    
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-evenly items-center max-w-[1320px] mx-auto my-8 px-5">
      <div>
        <Image
          src={"/assets/images/login/login.svg"}
          width={460}
          height={502}
          alt="login"
        />
      </div>
      <div className="w-full md:w-[448px] border-2 border-[#F3F3F3] rounded-[10px] p-6 md:p-10 lg:p-[72px]">
        <RegisterForm/>
      </div>
    </div>
  );
};

export default Register;
