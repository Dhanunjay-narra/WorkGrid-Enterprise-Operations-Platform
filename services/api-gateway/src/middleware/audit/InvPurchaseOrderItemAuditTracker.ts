export class InvPurchaseOrderItemAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvPurchaseOrderItem API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
