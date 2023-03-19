import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
  const fetchArray = async () => {
    const response = await fetch('/api/protected-route');

    if (!response.ok) {
      throw error(response.status, response.statusText);
    }

    const json = await response.json();

    return json.data;
  }

  return {
    array: fetchArray()
  }
}) satisfies PageLoad;