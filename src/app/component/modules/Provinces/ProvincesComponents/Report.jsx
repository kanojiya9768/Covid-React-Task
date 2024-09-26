import ComponentLoading from "@/app/component/Constant/componentLoading";
import { PaginationComponent } from "@/app/component/Constant/Pagination";
import { ReportCards } from "./ReportCards";

const Report = ({ allReports, Pagination, setPagination, isloading }) => {
  return (
    <div className="w-full py-6 relative">
      {!isloading && allReports?.length > 0 ? (
        <>
          <h1 className="flex items-center gap-1 text-2xl text-primary-text-color font-semibold my-4 justify-between">
            Reports
          </h1>

          {/* //report listing  */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {allReports
              ?.slice(
                Pagination?.currentPage * 10 - 10,
                Pagination?.currentPage * 10
              )
              ?.map((report, idx) => {
                return (
                  <ReportCards
                    key={idx}
                    province={report?.region?.province}
                    regionName={report?.region?.name}
                    totalCases={report?.confirmed}
                    recoveries={report?.recovered}
                    deaths={report?.deaths}
                  />
                );
              })}
          </div>

          {/* //pagination handling  */}
          <div className="my-6 grid place-items-center">
            <PaginationComponent
              setActive={(activePage) =>
                setPagination({ ...Pagination, currentPage: activePage })
              }
              currentPage={Pagination?.currentPage}
              totalPage={Pagination?.totalPage}
            />
          </div>
        </>
      ) : isloading ? (
        <ComponentLoading />
      ) : (
        allReports?.length === 0 && (
          <div className="text-center my-20 grid place-items-center">
            <h1 className="text-xl">No Reports Found</h1>
          </div>
        )
      )}
    </div>
  );
};

export default Report;
