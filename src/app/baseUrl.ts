import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setErrorMessage } from "@/app/appSlice";
import { isErrorWithMessage } from "@/common/utils/isErrorWithMessage";

export const baseUrl = createApi({
  reducerPath: "disease",
  tagTypes: ["Disease"],
  baseQuery: async (args, api, extraOptions) => {
    const result = await fetchBaseQuery({
      baseUrl: "https://disease.sh",
    })(args, api, extraOptions);

    if (result.error) {
      switch (result.error.status) {
        case "CUSTOM_ERROR":
        case "PARSING_ERROR":
        case "FETCH_ERROR":
        case "TIMEOUT_ERROR":
          api.dispatch(setErrorMessage({ error: result.error.error }));
          break;
        case 400:
          if (isErrorWithMessage(result.error.data)) {
            api.dispatch(setErrorMessage({ error: result.error.data.message }));
          } else {
            api.dispatch(setErrorMessage({ error: JSON.stringify(result.error) }));
          }
          break;
        default:
          if (result.error.status >= 500 && result.error.status < 600) {
            api.dispatch(setErrorMessage({ error: "Server error occurred. Please try again later." }));
          } else {
            api.dispatch(setErrorMessage({ error: JSON.stringify(result.error) }));
          }
          break;
      }
    }

    return result;
  },
  endpoints: () => ({}),
});

// interface SerializedError {
//   name?: string
//   message?: string
//   stack?: string
//   code?: string
// }

// interface FetchBaseQueryError {
//   status: number | string
//   data?: any
//   error?: string
// }
