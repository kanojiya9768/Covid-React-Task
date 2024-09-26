import { GET } from "@/app/lib/axiosMethodConfig";
import {
  getProvincesApiRoute,
  getRegionApiRoute,
  getReportsApiRoute,
} from "../../json/urlConstant";
import { generateQueryParams } from "../GenerateQueryParams";

export const GetAllRegionApiCall = async (headers = {}) => {
  try {
    const response = await GET(`${getRegionApiRoute}`, {
      ...headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const GetProvincenseByISOApiCall = async (params, headers = {}) => {
  try {
    const response = await GET(`${getProvincesApiRoute}${params}`, {
      ...headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const GetReportsApiCall = async (FilterData, headers = {}) => {
  let QueryParams = "?" + generateQueryParams(FilterData);
  try {
    const response = await GET(`${getReportsApiRoute}${QueryParams}`, {
      ...headers,
    });
    return response;
  } catch (error) {
    return error;
  }
};
