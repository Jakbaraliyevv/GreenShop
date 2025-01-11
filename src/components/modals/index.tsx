import { useReduxSelector } from "../../hooks/useRedux";
import AuthorizationModal from "./authorization-modal";
function Modals() {
  const { authoriationModalVisibilaty } = useReduxSelector(
    (state) => state.modalSlice
  );
  return <>{authoriationModalVisibilaty.open && <AuthorizationModal />}</>;
}

export default Modals;
