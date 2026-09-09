export class InvStockAuditAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvStockAudit API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
