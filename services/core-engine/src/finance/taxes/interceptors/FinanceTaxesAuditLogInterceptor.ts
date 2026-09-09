export class FinanceTaxesAuditLogInterceptor {
  public static preHandle(requestContext: Record<string, any>): boolean {
    requestContext.interceptedAt = new Date().toISOString();
    return true;
  }

  public static postHandle(result: Record<string, any>): Record<string, any> {
    result.processedBy = "FinanceTaxesAuditLogInterceptor";
    return result;
  }
}
