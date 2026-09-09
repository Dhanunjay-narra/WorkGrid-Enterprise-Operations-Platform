export class PrjRiskItemAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjRiskItem API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
