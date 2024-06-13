type APIMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const convertObjectToQueryString = (obj: any): string => {
  let str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }

  let queryString = str.join("&");
  return queryString.length > 0 ? `?${queryString}` : "";
};

async function apiFetch<T>(
  method: APIMethods,
  url: string,
  body: any = {}
): Promise<T> {
  let options: RequestInit = {
    method,
  };
  if (method === "GET" || method === "DELETE") {
    url = url + convertObjectToQueryString(body);
  } else {
    options.body = JSON.stringify(body);
  }

  return await fetch(url, options).then(
    async (response: Response): Promise<T> => await response.json()
  );
}

const API = {
  GET<T>(url: string, params?: any) {
    return apiFetch<T>("GET", url, params);
  },
  POST<T>(url: string, body?: any) {
    return apiFetch<T>("POST", url, body);
  },
  PUT<T>(url: string, body?: any) {
    return apiFetch<T>("GET", url, body);
  },
  DELETE<T>(url: string, params?: any) {
    return apiFetch<T>("GET", url, params);
  },
};

export default API;
