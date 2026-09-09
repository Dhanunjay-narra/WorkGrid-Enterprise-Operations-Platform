export class CommTypingStateAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommTypingState API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
