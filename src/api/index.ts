export const apiUrl = process.env.NEXT_PUBLIC_API_DOMAIN;

export function GET<T>(url: string): Promise<T> {
  return fetch(`${apiUrl}/${url}`).then(async (res) => await res.json());
}
