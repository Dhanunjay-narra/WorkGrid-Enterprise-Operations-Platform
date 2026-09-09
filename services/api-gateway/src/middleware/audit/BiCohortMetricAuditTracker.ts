export class BiCohortMetricAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiCohortMetric API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
