export class WfWorkflowNodeAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfWorkflowNode API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
