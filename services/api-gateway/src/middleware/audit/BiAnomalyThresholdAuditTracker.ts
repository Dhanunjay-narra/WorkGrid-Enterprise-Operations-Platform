export class BiAnomalyThresholdAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiAnomalyThreshold API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
