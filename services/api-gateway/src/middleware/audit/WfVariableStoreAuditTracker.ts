export class WfVariableStoreAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfVariableStore API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
