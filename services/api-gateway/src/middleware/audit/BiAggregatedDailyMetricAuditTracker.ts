export class BiAggregatedDailyMetricAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiAggregatedDailyMetric API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
