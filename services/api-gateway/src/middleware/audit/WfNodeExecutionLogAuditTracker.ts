export class WfNodeExecutionLogAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfNodeExecutionLog API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
