export class WfWorkflowDefinitionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfWorkflowDefinition API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
