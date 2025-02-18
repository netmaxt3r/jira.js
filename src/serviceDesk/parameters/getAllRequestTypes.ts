export interface GetAllRequestTypes {
  /** String to be used to filter the results. */
  searchQuery?: string;
  /**
   * Filter the request types by service desk Ids provided. Multiple values of the query parameter are supported. For
   * example, `serviceDeskId=1&serviceDeskId=2` will return request types only for service desks 1 and 2.
   */
  serviceDeskId?: number[];
  /**
   * The starting index of the returned objects. Base index: 0. See the
   * [Pagination](https://developer.atlassian.com/cloud/jira/service-desk/rest/intro/#pagination) section for more details.
   */
  start?: number;
  /**
   * The maximum number of items to return per page. Default: 100. See the
   * [Pagination](https://developer.atlassian.com/cloud/jira/service-desk/rest/intro/#pagination) section for more details.
   */
  limit?: number;
  expand?: string[];
}
