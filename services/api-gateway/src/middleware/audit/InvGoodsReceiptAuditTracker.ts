export class InvGoodsReceiptAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvGoodsReceipt API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
