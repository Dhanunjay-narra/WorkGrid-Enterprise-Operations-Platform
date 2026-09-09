export class WfWorkflowEdgeAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfWorkflowEdge API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
