export class FinCostCenterAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinCostCenter API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
