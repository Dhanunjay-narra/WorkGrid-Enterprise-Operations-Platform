export class FinGeneralLedgerAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinGeneralLedger API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
