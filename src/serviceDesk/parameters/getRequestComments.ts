export interface GetRequestComments {
  /** The ID or key of the customer request whose comments will be retrieved. */
  issueIdOrKey: string;
  /** Specifies whether to return public comments or not. Default: true. */
  public?: boolean;
  /** Specifies whether to return internal comments or not. Default: true. */
  internal?: boolean;
  /**
   * A multi-value parameter indicating which properties of the comment to expand:
   *
   * `attachment` returns the attachment details, if any, for each comment. (If you want to get all attachments for a
   * request, use [servicedeskapi/request/{issueIdOrKey}/attachment](#api-request-issueIdOrKey-attachment-get).)
   * `renderedBody` (Experimental) returns the rendered body in HTML format (in addition to the raw body) for each comment.
   */
  expand?: string[];
  /**
   * The starting index of the returned comments. Base index: 0. See the
   * [Pagination](https://developer.atlassian.com/cloud/jira/service-desk/rest/intro/#pagination) section for more details.
   */
  start?: number;
  /**
   * The maximum number of comments to return per page. Default: 50. See the
   * [Pagination](https://developer.atlassian.com/cloud/jira/service-desk/rest/intro/#pagination) section for more details.
   */
  limit?: number;
}
