import { Spinner } from "flowbite-react";

export default function SpinnerScreen() {
  return (
    <div className="flex justify-center items-center h-full">
      <Spinner
        theme={{
          color: {
            info: "fill-gray-900",
          },
        }}
      />
    </div>
  );
}
