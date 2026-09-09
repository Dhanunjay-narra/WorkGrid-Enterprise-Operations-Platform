export class WfWorkflowExecutionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfWorkflowExecution API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
