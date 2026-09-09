export class BiKpiMetricAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiKpiMetric API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
