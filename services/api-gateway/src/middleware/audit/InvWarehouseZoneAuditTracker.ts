export class InvWarehouseZoneAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvWarehouseZone API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
