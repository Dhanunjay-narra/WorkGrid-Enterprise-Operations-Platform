export class FinCashFlowItemAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinCashFlowItem API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
