export class PrjSprintRetrospectiveAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjSprintRetrospective API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
