export const apiUrl = process.env.NEXT_PUBLIC_API_DOMAIN;

interface DotNetErrorResponse {
  errors?: string[];
  status?: number;
}

export type DotNetRes<T> = T | DotNetErrorResponse;

export function GET<T>(url: string): Promise<T> {
  return fetch(`${apiUrl}/${url}`).then(async (res) => await res.json());
}

export function RejectIfUndefined(valToCheck: any, cb: () => any) {
  return valToCheck
    ? cb()
    : new Promise((_, rj) => rj("undefined value check failed"));
}
