import Header from "../component/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
