import ErrorConstants from "@common/ErrorConstant";
import Utils from "@common/Utils";
import JobsResource from "./JobsResource";

const JobsManager = function (
  JobsResource: any,
  Utils: any,
  ErrorConstants: any
) {
  function searchJobs(
    params: object,
    successCallback: (val: any) => void,
    errorCallback: (val: any) => void
  ) {
    JobsResource.searchJobs(params).then(
      function (res: any) {
        successCallback(res);
      },
      function (error: any) {
        error = Utils.updateErrorObject(error);
        errorCallback(error);
      }
    );
  }

  return {
    searchJobs,
  };
};

export default JobsManager(JobsResource, Utils, ErrorConstants);
