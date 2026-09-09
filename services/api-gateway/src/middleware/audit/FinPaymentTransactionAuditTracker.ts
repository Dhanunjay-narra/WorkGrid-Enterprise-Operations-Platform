export class FinPaymentTransactionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinPaymentTransaction API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
