export class FinFiscalYearAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinFiscalYear API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
