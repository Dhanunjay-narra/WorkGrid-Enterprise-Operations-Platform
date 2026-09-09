export class FinTaxRateAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinTaxRate API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
