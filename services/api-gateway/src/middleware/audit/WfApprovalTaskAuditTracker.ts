export class WfApprovalTaskAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfApprovalTask API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
