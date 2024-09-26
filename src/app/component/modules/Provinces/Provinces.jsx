import Report from "@/app/component/modules/Provinces/ProvincesComponents/Report";
import useCustomQueryHook from "@/app/lib/hooks/FetchApiHook";
import { Option, Select } from "@material-tailwind/react";
import { useCallback, useEffect, useState } from "react";
import {
  GetProvincenseByISOApiCall,
  GetReportsApiCall,
} from "../../../../../utils/Apis/CovidApisFn";
import MoreFiltersForm from "./ProvincesComponents/MoreFiltersForm";

const Provinces = ({ iso }) => {
  // store all filters
  const [filter, setFilter] = useState({
    region_province: "",
    region_name: "",
    iso: iso,
    date: "",
    q: "",
  });

  //store all provinces
  const [Provinces, setProvinces] = useState([]);

  //report store
  const [allReports, setallReports] = useState([]);

  //handling pagination in this state
  const [Pagination, setPagination] = useState({
    currentPage: 1,
    totalPage: 1,
    totalCOunt: 0,
  });

  //   my api call function for get list of province
  const ProvinceApiCallFunction = useCallback(async () => {
    try {
      const response = await GetProvincenseByISOApiCall(filter?.iso);
      setProvinces(response?.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }, []);

  //   my api call function
  const ReportApiCallFunction = useCallback(async (data) => {
    try {
      const response = await GetReportsApiCall(data ?? filter);
      setallReports(response?.data);
      const ResponseDataLength = response?.data?.length;
      if (ResponseDataLength > 0) {
        setPagination({
          ...Pagination,
          totalPage: Math.ceil(ResponseDataLength / 10),
          totalCOunt: ResponseDataLength,
        });
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }, []);

  //custom hook which provide us response, loading , error , fetchData method or states
  const {} = useCustomQueryHook(ProvinceApiCallFunction);
  const { loading, fetchData } = useCustomQueryHook(ReportApiCallFunction,allReports?.length > 0 ? true : false);

  useEffect(() => {
    const handler = setTimeout(() => {
      fetchData(filter);
    }, 1000);

    // Cleanup function to clear the timeout if filter changes
    return () => {
      clearTimeout(handler);
    };
  }, [filter]);

  const handleChange = (value) => {
    setFilter({
      ...filter,
      region_province: value,
    });
  };
  return (
    <div className="p-6">
      <h1
        className="my-2 font-semibold text-primary-text-color"
        color="blue-gray"
      >
        Choose Province
      </h1>
      <div className="flex gap-10 items-center">
        <div className="w-72">
          <Select
            name="region_province"
            label="Select Provinces"
            color="red"
            value="Anhui"
            onChange={handleChange}
            disabled={Provinces[0]?.province === ""}
          >
            {Provinces?.map((value) => {
              return (
                <Option key={value?.province} value={value?.province}>
                  {value?.province}
                </Option>
              );
            })}
          </Select>
        </div>
      </div>

      {/* //more filter form  */}
      <MoreFiltersForm filters={filter} setFilter={setFilter} />

      {/* //report component is here  */}
      <Report
        isloading={loading}
        allReports={allReports}
        Pagination={Pagination}
        setPagination={setPagination}
      />
    </div>
  );
};

export default Provinces;
