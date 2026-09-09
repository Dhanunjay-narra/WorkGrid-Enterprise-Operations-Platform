export class InvStockReservationAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvStockReservation API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
