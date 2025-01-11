import logo from "../../img/logo.svg";
import search from "../../img/search.svg";
import shopKorzina from "../../img/shopKorzina.svg";
import login from "../../img/Logout.svg";
import { Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import { setAuthoriationModalVisibilaty } from "../../redux/modal-clise";
import { useReduxDispatch } from "../../hooks/useRedux";

function Navbar() {
  const dispatch = useReduxDispatch();

  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <header className="flex items-center justify-between  py-5">
      <nav className="w-[150px] h-[35px]">
        <img src={logo} alt="" />
      </nav>
      <nav className="flex items-center gap-[40px]">
        <h3
          onClick={() => navigate("/")}
          className={`font-medium text-[17px] cursor-pointer ${
            pathname === "/" ? "text-[#46a358]" : "#333"
          } `}
        >
          Home
        </h3>
        <h3
          onClick={() => navigate("/shop")}
          className={`font-medium text-[17px] cursor-pointer ${
            pathname === "/shop" ? "text-[#46a358]" : "#333"
          } `}
        >
          Shop
        </h3>
        <h3
          onClick={() => navigate("/plantCare")}
          className={`font-medium text-[17px] cursor-pointer ${
            pathname === "/plantCare" ? "text-[#46a358]" : "#333"
          } `}
        >
          Plant Care
        </h3>
        <h3
          onClick={() => navigate("/blog")}
          className={`font-medium text-[17px] cursor-pointer ${
            pathname === "/blog" ? "text-[#46a358]" : "#333"
          } `}
        >
          Blogs
        </h3>
      </nav>

      <nav className="flex items-center gap-[35px]">
        <img src={search} alt="" />
        <BellOutlined className="text-[24px] cursor-pointer" />
        <Badge count={19}>
          <img src={shopKorzina} alt="" />
        </Badge>
        <button
          onClick={() =>
            dispatch(
              setAuthoriationModalVisibilaty({ open: true, isLoading: false })
            )
          }
          className="flex items-center gap-[10px] bg-[#46a358] text-[#FFF] w-[100px] h-[35px] rounded-[6px] justify-center"
        >
          <img src={login} alt="" />
          Login
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
