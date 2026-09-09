export class PrjProjectHealthMetricAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjProjectHealthMetric API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
