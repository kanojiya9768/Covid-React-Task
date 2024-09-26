import Heading from "@/app/component/Constant/elements/Heading";
import RegionsListing from "@/app/component/modules/dashboard/dashboardComponents/RegionsListing";
import { ChartBarIcon } from "@heroicons/react/24/outline";

const Dashboard = () => {
  return (
    <div className="p-6">
      <Heading
        headingClassName={
          "text-3xl font-bold font-serif flex items-center gap-2"
        }
        heading={"Dashboard Management"}
        icon={{ icon: ChartBarIcon }}
        iconcLassName={
          "w-16 h-16 bg-primary-theme-color text-primary-white-color p-2 rounded-full "
        }
      />

      {/* Regions Card Listing  */}
      <RegionsListing />
    </div>
  );
};

export default Dashboard;
