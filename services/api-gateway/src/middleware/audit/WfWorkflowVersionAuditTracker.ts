export class WfWorkflowVersionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfWorkflowVersion API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
