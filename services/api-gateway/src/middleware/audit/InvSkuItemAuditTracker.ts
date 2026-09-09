export class InvSkuItemAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] InvSkuItem API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
