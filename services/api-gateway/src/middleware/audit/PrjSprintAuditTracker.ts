export class PrjSprintAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjSprint API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
