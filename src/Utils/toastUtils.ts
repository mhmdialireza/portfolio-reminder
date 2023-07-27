import { toast } from "react-toastify";

class AppToast {
  static error = (message: string) => {
    toast["error"](message);
  };
  static success = (message: string) => {
    toast["success"](message);
  };
}
export default AppToast;
