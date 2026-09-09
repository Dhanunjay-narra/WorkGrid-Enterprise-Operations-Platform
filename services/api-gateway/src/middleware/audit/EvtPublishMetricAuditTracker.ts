export class EvtPublishMetricAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] EvtPublishMetric API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
