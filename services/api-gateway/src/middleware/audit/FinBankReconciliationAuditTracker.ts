export class FinBankReconciliationAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinBankReconciliation API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
