export class BiExecutiveSummaryAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiExecutiveSummary API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
