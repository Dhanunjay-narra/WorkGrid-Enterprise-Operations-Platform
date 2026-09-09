export class CrmTerritoryThresholdInterceptor {
  public static preHandle(requestContext: Record<string, any>): boolean {
    requestContext.interceptedAt = new Date().toISOString();
    return true;
  }

  public static postHandle(result: Record<string, any>): Record<string, any> {
    result.processedBy = "CrmTerritoryThresholdInterceptor";
    return result;
  }
}
