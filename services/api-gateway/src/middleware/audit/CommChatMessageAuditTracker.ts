export class CommChatMessageAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommChatMessage API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
