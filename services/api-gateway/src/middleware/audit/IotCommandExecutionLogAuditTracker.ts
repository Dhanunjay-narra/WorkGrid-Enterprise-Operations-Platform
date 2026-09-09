export class IotCommandExecutionLogAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IotCommandExecutionLog API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
