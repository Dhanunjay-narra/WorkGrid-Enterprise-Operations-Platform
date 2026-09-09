export class InvSupplierScorecardAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvSupplierScorecard API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
