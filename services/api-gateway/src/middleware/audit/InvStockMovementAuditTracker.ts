export class InvStockMovementAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvStockMovement API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
