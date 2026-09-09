export class CommThreadReplyAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommThreadReply API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
