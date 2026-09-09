export class WfEventTriggerAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfEventTrigger API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
