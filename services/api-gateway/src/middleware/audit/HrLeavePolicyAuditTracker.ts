export class HrLeavePolicyAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrLeavePolicy API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
