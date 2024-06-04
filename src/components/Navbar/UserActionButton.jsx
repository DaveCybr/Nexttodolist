import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";

const UserActionButton = async () => {
  const user = await authUserSession();

  const actionLabel = user ? "Sign Out" : "Sign In";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";
  const classBtn = user
    ? "btn btn-sm btn-error mr-3"
    : "btn btn-sm btn-primary mr-3";

  return (
    <div className="flex justify-between gap-2">
      <button className={classBtn}>
        <Link
          href={actionURL}
          className=" text-color-primary py-1 px-3 inline-block rounded-md"
        >
          {actionLabel}
        </Link>
      </button>
    </div>
  );
};

export default UserActionButton;
