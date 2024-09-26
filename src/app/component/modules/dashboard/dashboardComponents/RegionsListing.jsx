"use client";
import ComponentLoading from "@/app/component/Constant/componentLoading";
import { Modal } from "@/app/component/Constant/Modal";
import { PaginationComponent } from "@/app/component/Constant/Pagination";
import { RegionCard } from "@/app/component/modules/dashboard/dashboardComponents/RegionCard";
import UseCustomQueryHook from "@/app/lib/hooks/FetchApiHook";
import { useCallback, useState } from "react";
import { GetAllRegionApiCall } from "../../../../../../utils/Apis/CovidApisFn";
import Provinces from "../../Provinces/Provinces";

const RegionsListing = () => {
  //modal handling
  const [openModal, setOpenModal] = useState(false);

  //set iso to pass to props
  const [iso, setiso] = useState("");

  //store all pagination in this state
  const [Regions, setRegions] = useState([]);

  //handling pagination in this state
  const [Pagination, setPagination] = useState({
    currentPage: 1,
    totalPage: 1,
    totalCOunt: 0,
  });

  //   my api call function
  const ApiCallFunction = useCallback(async () => {
    try {
      const response = await GetAllRegionApiCall();
      setRegions(response?.data);
      const ResponseDataLength = response?.data?.length;
      if (ResponseDataLength > 0) {
        setPagination({
          ...Pagination,
          totalPage: Math.ceil(ResponseDataLength / 20),
          totalCOunt: ResponseDataLength,
        });
      }
      return response;
    } catch (error) {
      console.log(error);
    }
  }, []);

  //custom hook which provide us response, loading , error , fetchData method or states
  const {
    loading,
    error,
    fetchData: refetchRegion,
  } = UseCustomQueryHook(ApiCallFunction);

  return (
    <>
      <div className="my-8 relative w-full h-full grid place-items-center">
        {!loading ? (
          <div className="w-[80%]">
            {/* //region heading and total count  */}
            <h1 className="flex items-center gap-1 text-lg font-semibold my-4 justify-between">
              Regions ( {Pagination?.totalCOunt} ){" "}
            </h1>

            {/* //cards  */}
            <div className="grid sm:grid-cols-3 grid-cols-1 lg:grid-cols-4  gap-2">
              {Regions?.slice(
                Pagination?.currentPage * 20 - 20,
                Pagination?.currentPage * 20
              )?.map((region, idx) => {
                return (
                  <RegionCard
                    key={idx}
                    iso={region?.iso}
                    regionName={region?.name}
                    Visit={() => {
                      setOpenModal(true), setiso(region?.iso);
                    }}
                  />
                );
              })}
            </div>

            <div className="grid place-items-center">
              <PaginationComponent
                setActive={(activePage) =>
                  setPagination({ ...Pagination, currentPage: activePage })
                }
                currentPage={Pagination?.currentPage}
                totalPage={Pagination?.totalPage}
              />
            </div>
          </div>
        ) : loading ? (
          <ComponentLoading />
        ) : (
          error && ""
        )}
      </div>

      {/* //ProvincesModal */}
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        Component={Provinces}
        iso={iso}
      ></Modal>
    </>
  );
};

export default RegionsListing;
