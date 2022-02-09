import { ReactNode, MouseEvent } from "react";
import { Portal } from "./Portal";

type Props = {
  closePortalHandler: () => void;
  children: ReactNode;
};

export const OverlayPortal = ({ closePortalHandler, children }: Props) => {
  const handleClosePortal = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    closePortalHandler();
  };

  return (
    <Portal rootId="overlay-root">
      <View
        className="z-30 absolute h-screen w-screen flex"
        onClick={(e) => handleClosePortal(e)}
      >
        <View
          className="z-40 bg-gray-50 rounded-3xl select-none m-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </View>
      </View>
    </Portal>
  );
};
