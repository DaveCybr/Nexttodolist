import userNotLoginImage from "./userNotlogin.jpg";
import Image from "next/image";

const UserNotLogged = () => {
  return (
    <>
      <div>
        <div className="min-h-[60vh] max-w-xl mx-auto flex justify-center items-center">
          <div className="flex justify-center items-center gap-4 flex-col">
            <Image
              src={userNotLoginImage}
              width={400}
              height={400}
              alt="Picture of the author"
            />
            <label className="text-neutral-content text-4xl font-bold">
              Login to create tasks
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNotLogged;
