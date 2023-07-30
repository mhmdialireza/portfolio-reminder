import { toast } from "react-toastify";

class AppToast {
  static error = (message: string) => {
    // toast["error"](message);
    toast.error(message, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  static success = (message: string) => {
    // toast["success"](message);
    toast.success(message, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
}
export default AppToast;
