import { ReactNode } from "react";

const Authlayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full flex justify-center items-center bg-sky-400">
      {children}
    </div>
  );
};

export default Authlayout;
