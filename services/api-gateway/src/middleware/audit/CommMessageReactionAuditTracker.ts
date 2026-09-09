export class CommMessageReactionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommMessageReaction API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
