import { Modal } from "antd";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/useRedux";
import { setAuthoriationModalVisibilaty } from "../../../redux/modal-clise";

function AuthorizationModal() {
  const dispatch = useReduxDispatch();
  const { authoriationModalVisibilaty } = useReduxSelector(
    (state) => state.modalSlice
  );
  return (
    <div>
      <Modal
        open={authoriationModalVisibilaty}
        onCancel={() => dispatch(setAuthoriationModalVisibilaty())}
        footer={false}
      >
        <p>Salom</p>
        <p>Salom</p>
        <p>Salom</p>
        <p>Salom</p>
      </Modal>
    </div>
  );
}

export default AuthorizationModal;
