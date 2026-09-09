export class IdAuditTrailAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdAuditTrail API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
