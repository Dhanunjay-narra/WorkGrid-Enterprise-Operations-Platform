export class SupQueueAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupQueue API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
