export class WfApprovalDecisionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfApprovalDecision API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
