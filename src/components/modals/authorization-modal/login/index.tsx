import { Form, Input } from "antd";
import { FieldType } from "../../../../@types";
import google from "../../../../img/google.svg";
import facebook from "../../../../img/facebook.svg";
import { useAxios } from "../../../../hooks/useAxios";
import { LoadingOutlined } from "@ant-design/icons";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setAuthoriationModalVisibilaty } from "../../../../redux/modal-clise";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { signInWithGoogle } from "../../../../config";
function Login() {
  const signIn = useSignIn();
  const axios = useAxios();

  const { authoriationModalVisibilaty } = useReduxSelector(
    (state) => state.modalSlice
  );
  const dispatch = useReduxDispatch();

  const onFinish = (e: FieldType) => {
    dispatch(setAuthoriationModalVisibilaty({ open: true, isLoading: true }));
    axios({ url: "/user/sign-in", body: e, method: "POST" })
      .then((data) => {
        dispatch(
          setAuthoriationModalVisibilaty({ open: false, isLoading: false })
        );

        const { token, user } = data.data;
        localStorage.setItem("token", token);
        signIn({
          auth: {
            token: token,
            type: "Bearer",
          },
          userState: user,
        });
      })
      .catch(() => {
        dispatch(
          setAuthoriationModalVisibilaty({ open: true, isLoading: false })
        );
      });
  };

  const signInGoole = async () => {
    const response = await signInWithGoogle();
    console.log(response);

    await axios({
      url: "/user/sign-in/google",
      method: "POST",
      body: { email: response.user.email },
    }).then((data) => console.log(data));
  };

  return (
    <div className="">
      <p className="py-4 text-center text-[14px] text-[#3D3D3D]">
        Enter your username and password to login.
      </p>
      <Form
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="almamun_uxui@outlook.com"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            className="border-[#eaeaea] h-[40px] hover:border-[#46A358] focus:border-[#46A358]"
            placeholder="***********"
          />
        </Form.Item>

        <p className="text-end text-[#46a358] text-[15px]">Forgot Password? </p>
        <button
          disabled={authoriationModalVisibilaty.isLoading}
          className={`bg-[#46a358] w-full h-[40px] rounded-md text-white mt-5 text-[18px] ${
            authoriationModalVisibilaty.isLoading ? "opacity-70" : "opacity-100"
          } `}
          type="submit"
        >
          {authoriationModalVisibilaty.isLoading ? (
            <LoadingOutlined />
          ) : (
            "Login"
          )}
        </button>
      </Form>

      <div className="flex justify-center items-center flex-col gap-[20px] mt-5">
        <div className="w-[100%] flex items-center justify-center mt-5 mb-5 gap-4">
          <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
          <p className="w-[40%]text-[#3D3D3D] text-[13px]">Or login with</p>
          <div className="w-[30%] h-[2px] bg-[#EAEAEA]"></div>
        </div>
        <div
          onClick={signInGoole}
          className="border w-full h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer"
        >
          <img src={google} alt="" />
        </div>
        <div className="border w-full h-[40px] rounded-md flex items-center justify-center gap-3 mb-4 cursor-pointer">
          <img src={facebook} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Login;

// value={"raimjonov05@mail.ru"}
// value={"12345678"}
