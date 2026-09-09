export class HrTimesheetAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrTimesheet API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
