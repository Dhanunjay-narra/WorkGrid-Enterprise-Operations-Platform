export class FinRecurringPlanAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinRecurringPlan API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
