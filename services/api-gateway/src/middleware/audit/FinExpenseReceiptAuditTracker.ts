export class FinExpenseReceiptAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinExpenseReceipt API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
