export class PrjBudgetLineAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjBudgetLine API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
