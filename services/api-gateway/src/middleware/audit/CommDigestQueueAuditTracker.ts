export class CommDigestQueueAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommDigestQueue API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
