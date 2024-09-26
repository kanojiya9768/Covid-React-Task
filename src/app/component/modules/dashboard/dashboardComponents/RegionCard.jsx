import { ArrowRightIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export const RegionCard = ({ iso, regionName, Visit }) => {
  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-full p-6">
      <div className="flex items-center mb-4">
        <GlobeAltIcon className="w-6 h-6" />
        <h5 className="ml-3 text-slate-800 text-xl font-semibold">{iso}</h5>
      </div>
      <p className="block text-slate-600 leading-normal font-light mb-4">
        {regionName}
      </p>
      <div>
        <div
          onClick={Visit}
          className="text-slate-800 cursor-pointer font-semibold text-sm hover:underline flex items-center"
        >
          View Report
          <ArrowRightIcon className="w-4 h-4 ml-2" />
        </div>
      </div>
    </div>
  );
};
