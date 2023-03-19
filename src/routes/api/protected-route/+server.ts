import { error, json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const GET = (async (event) => {
  const session = await event.locals.getSession();

  if (!session) {
    throw error(401, 'Unauthorized');
  }

  return json({data: ['this', 'is', 'data']});
}) satisfies RequestHandler;