export interface Date {
  /** Date in ISO8601 format. */
  iso8601?: string;
  /**
   * Date in the format used in the Jira REST APIs, which is ISO8601 format but extended with milliseconds. For example,
   * 2016-09-28T23:08:32.097+1000.
   */
  jira?: string;
  /** Date in a user-friendly text format. */
  friendly?: string;
  /** Date as the number of milliseconds that have elapsed since 00:00:00 Coordinated Universal Time (UTC), 1 January 1970. */
  epochMillis?: number;
}
