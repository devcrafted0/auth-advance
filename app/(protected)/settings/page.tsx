import { auth, signOut } from "@/auth";
import { CardWrapper } from "@/components/auth/card-wrapper";

const SettingPage = async () => {
  const session = await auth();
  return (
    <div className="w-full h-full flex justify-center items-center bg-sky-400">
      <CardWrapper headerLabel="User Info" backButtonHref="" backButtonLabel="">
        <div className="flex justify-center items-center flex-col gap-2 rounded">
          <h1>Name : {session?.user.name}</h1>
          <p>Email : {session?.user.email}</p>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button
              className="px-5 py-2 border rounded-full cursor-pointer hover:bg-black hover:text-white transition-colors duration-200"
              type="submit"
            >
              Logout
            </button>
          </form>
        </div>
      </CardWrapper>
    </div>
  );
};

export default SettingPage;
