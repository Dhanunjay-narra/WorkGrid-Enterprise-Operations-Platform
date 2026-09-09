export class WfExecutionStepMetricAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfExecutionStepMetric API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
