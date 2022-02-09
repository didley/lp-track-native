import React from "react";
import { useGlobalDispatch } from "app/state/context";

export const MenuDialog = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useGlobalDispatch();

  return (
    <View className="w-screen h-screen z-10 absolute inset-0 text-gray-900">
      <View className="absolute text-left p-4 left-0 right-0 ml-auto mr-auto mt-auto mb-auto inset-0 w-72 z-20 bg-white shadow-lg max-h-56 rounded-2xl text-base overflow-auto sm:text-sm">
        {children}
      </View>
      <View
        className="absolute inset-0 bottom-0 top-0 z-10"
        onClick={() => dispatch({ type: "menu/close" })}
      />
    </View>
  );
};
