export class DocRetentionScheduleAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] DocRetentionSchedule API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
