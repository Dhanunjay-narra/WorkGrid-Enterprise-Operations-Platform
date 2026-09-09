export class InvStockLevelAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvStockLevel API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
