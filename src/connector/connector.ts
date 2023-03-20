interface IQueryParams {
  [key: string]: string | string[];
}

const API_URL = import.meta.env.VITE_API_URL;
/**
 * @param URI
 * @param params
 */
export const get = async (
  URI: string,
  params: IQueryParams | null = null
): Promise<unknown> => {
  const route = params
    ? createParams(API_URL, URI, params)
    : `${API_URL}${URI}`;
  const response = await fetch(`${route}`, {
    headers: headers(),
  });

  return errorCheck(response);
};

const createParams = (baseUrl: string, uri: string, params: IQueryParams) => {
  const url = new URL(uri, baseUrl);
  Object.entries(params || {}).forEach(([key, val]) => {
    url.searchParams.append(key, <string>val);
  });
  return url.toString();
};

const headers = () => ({
  Accept: "application/json",
  "Content-Type": "application/json",
});

const errorCheck = async (serviceResponse: Response): Promise<unknown> => {
  if (!serviceResponse.ok) {
    throw new Response(serviceResponse.statusText, {
      status: serviceResponse.status,
    });
  }

  return serviceResponse.json();
};
