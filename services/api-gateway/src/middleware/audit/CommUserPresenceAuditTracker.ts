export class CommUserPresenceAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommUserPresence API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
