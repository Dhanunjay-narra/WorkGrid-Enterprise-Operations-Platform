export class WfCronScheduleAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfCronSchedule API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
