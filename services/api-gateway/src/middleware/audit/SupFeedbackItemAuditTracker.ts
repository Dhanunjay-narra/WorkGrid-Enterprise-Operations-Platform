export class SupFeedbackItemAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupFeedbackItem API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
