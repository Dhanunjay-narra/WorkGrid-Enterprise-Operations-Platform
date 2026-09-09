export class InvWarehouseAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvWarehouse API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
