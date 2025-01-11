import { Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setAuthoriationModalVisibilaty } from "../../../redux/modal-clise";
import Login from "./login";
import Register from "./register";
import { useState } from "react";

function AuthorizationModal() {
  const [login, setLogin] = useState<boolean>(true);

  const dispatch = useReduxDispatch();
  const { authoriationModalVisibilaty } = useReduxSelector(
    (state) => state.modalSlice
  );
  return (
    <Modal
      open={authoriationModalVisibilaty.open}
      onCancel={() =>
        dispatch(
          setAuthoriationModalVisibilaty({ open: false, isLoading: false })
        )
      }
      footer={false}
    >
      <div className="flex items-center justify-center gap-9">
        <h3
          onClick={() => setLogin(true)}
          className={` text-[19px] cursor-pointer font-medium ${
            login ? "text-green-600" : "text-[#000] "
          }`}
        >
          Login
        </h3>
        <span className=" h-[20px] border border-[#000] "></span>
        <h3
          onClick={() => setLogin(false)}
          className={` text-[19px] cursor-pointer font-medium ${
            login ? "text-[#000] " : "text-green-600"
          }`}
        >
          Register
        </h3>
      </div>

      {login ? <Login /> : <Register />}
    </Modal>
  );
}

export default AuthorizationModal;
