export class CommMentionRecordAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommMentionRecord API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
