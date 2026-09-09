export class InvPurchaseOrderAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvPurchaseOrder API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
