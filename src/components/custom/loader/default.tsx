import { LoaderPinwheel } from 'lucide-react';

const Loader = () => {
  return (
    <div className="flex justify-center">
      <LoaderPinwheel className="text-secondary size-24 animate-spin" />
    </div>
  );
};

export default Loader;
