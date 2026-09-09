export class FinInvoiceItemAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinInvoiceItem API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
