import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { params } from "../src/utils/customURLMiddleware"
import { fetchValidGuilds } from "./utils/api";

type Param = {
  locale: string;
  slug: string;
  search: string
}

const validateMiddlewareCookies = (req: NextRequest) => {
  const sessionID = req.cookies.get('connect.sid');
  return sessionID
    ? {
      Cookie: `connect.sid=${sessionID}`
    }
    :
    false;
}

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.nextUrl.pathname.startsWith('/dashboard')) {
    // This logic is only applied to /dashboard route


    console.log("Middleware Intercepted");

    const { locale: route, slug: id, search: page }: Param = params(req.url);
    //the format of the this param object would be : http://localhost:3000/dashboard/1234/settings
    //'dashboard' is the locale
    //'1234' is the slug
    //settings is the search
    console.log(route, id, page);

    const headers = validateMiddlewareCookies(req);
    if (!headers) {
      return NextResponse.redirect("/");
    }

    const response = await fetchValidGuilds(id, headers);
    return response.status === 200 ? NextResponse.next() : NextResponse.rewrite(new URL('/menu',req.url));
    
  }
}
