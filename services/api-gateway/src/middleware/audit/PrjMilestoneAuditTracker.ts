export class PrjMilestoneAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjMilestone API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
