export class CommChannelAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommChannel API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
