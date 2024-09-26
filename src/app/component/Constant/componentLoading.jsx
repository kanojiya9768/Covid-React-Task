import { Spinner } from "@material-tailwind/react";

const ComponentLoading = () => {
  return (
    <div className="absolute h-full top-[30vh] left-0 right-0 bottom-0 w-full z-40 bg-white grid place-items-center">
      <Spinner color="white" className="h-16 w-16 text-primary-theme-color" />
    </div>
  );
};

export default ComponentLoading;
