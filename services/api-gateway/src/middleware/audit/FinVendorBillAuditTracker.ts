export class FinVendorBillAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinVendorBill API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
