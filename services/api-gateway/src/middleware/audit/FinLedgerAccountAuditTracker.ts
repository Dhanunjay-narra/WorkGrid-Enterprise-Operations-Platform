export class FinLedgerAccountAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinLedgerAccount API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
