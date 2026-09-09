export class IntRateLimitsSnapshotInterceptor {
  public static preHandle(requestContext: Record<string, any>): boolean {
    requestContext.interceptedAt = new Date().toISOString();
    return true;
  }

  public static postHandle(result: Record<string, any>): Record<string, any> {
    result.processedBy = "IntRateLimitsSnapshotInterceptor";
    return result;
  }
}
