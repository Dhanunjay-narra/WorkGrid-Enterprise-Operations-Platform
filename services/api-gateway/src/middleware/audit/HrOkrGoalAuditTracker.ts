export class HrOkrGoalAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrOkrGoal API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
