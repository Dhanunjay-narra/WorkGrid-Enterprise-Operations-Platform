export class CommDirectMessageAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommDirectMessage API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
