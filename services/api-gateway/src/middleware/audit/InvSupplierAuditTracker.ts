export class InvSupplierAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvSupplier API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
