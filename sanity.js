 import { createCurrentUserHook } from "next-sanity";
 import imageUrlBuilder from "@sanity/image-url";
 import createClient from "@sanity/client";


 export const config = {
     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
     apiVersion: "2021-03-25",
     useCdn: process.env.NODE_ENV == "production",
 };

 export const sanityClient = createClient(config);

 export const urlFor = (source) => imageUrlBuilder(config).image(source);

 //  export const useCurrentUser = createCurrentUserHook(config);