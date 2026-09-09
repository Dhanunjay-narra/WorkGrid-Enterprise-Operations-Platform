export class SupCsatScoreAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupCsatScore API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
