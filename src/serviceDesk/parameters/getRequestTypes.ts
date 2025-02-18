export interface GetRequestTypes {
  /**
   * The ID of the service desk whose customer request types are to be returned. This can alternatively be a [project
   * identifier.](#project-identifiers)
   */
  serviceDeskId: string;
  /** Filters results to those in a customer request type group. */
  groupId?: number;
  expand?: string[];
  /** The string to be used to filter the results. */
  searchQuery?: string;
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
}
