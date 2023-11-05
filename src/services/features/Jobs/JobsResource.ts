import $http from "@global/http";
// import Config from "react-native-config";

// const host = Config?.HOST_URL;
const host = "https://jsearch.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": "7dd2cb98d0msh721c8e356c491f8p111c4fjsnec9c82b21039",
  "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
};

// interface jobResTypes {
//   get: (result?: any, val?: object, hed?: any, body?: any) => any;
//   post: (result?: any, val?: object, hed?: any, body?: any) => any;
//   put: (result?: any, val?: object, hed?: any, body?: any) => any;
//   delete: (result?: any, val?: object, hed?: any, body?: any) => any;
// }

const JobsResource = function ($http: any) {
  function searchJobs(params: any) {
    var url = host + `/${params.endPoint}`;

    console.log("URL==>", url);
    // console.log("Data==>", JSON.stringify(params, null, 2));
    // console.log("headers==>", headers);
    return $http.get(url, params.query, headers);
  }

  return {
    searchJobs,
  };
};

export default JobsResource($http);
