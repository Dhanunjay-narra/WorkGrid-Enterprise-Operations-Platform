export class SecAccessReviewScheduleAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SecAccessReviewSchedule API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
