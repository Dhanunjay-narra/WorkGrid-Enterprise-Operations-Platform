export class SupSatisfactionReportAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupSatisfactionReport API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
