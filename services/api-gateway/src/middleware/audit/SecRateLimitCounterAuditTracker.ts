export class SecRateLimitCounterAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SecRateLimitCounter API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
