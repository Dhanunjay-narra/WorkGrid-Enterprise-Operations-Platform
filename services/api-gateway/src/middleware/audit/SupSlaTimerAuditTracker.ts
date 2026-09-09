export class SupSlaTimerAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupSlaTimer API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
