import { TailSpin } from "react-loader-spinner";

type Props = {
  color?: string;
};
const AppLoader = ({ color }: Props) => {
  return (
    <div className="h-full  grid place-items-center">
      <TailSpin
        height="30"
        width="30"
        color={color ?? "black"}
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </div>
  );
};

export default AppLoader;
