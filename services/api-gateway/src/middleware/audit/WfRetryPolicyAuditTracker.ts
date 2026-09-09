export class WfRetryPolicyAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfRetryPolicy API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
