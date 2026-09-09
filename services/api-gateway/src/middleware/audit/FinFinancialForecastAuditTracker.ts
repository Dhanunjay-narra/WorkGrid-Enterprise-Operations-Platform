export class FinFinancialForecastAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinFinancialForecast API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
