export class BiReportScheduleAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiReportSchedule API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
