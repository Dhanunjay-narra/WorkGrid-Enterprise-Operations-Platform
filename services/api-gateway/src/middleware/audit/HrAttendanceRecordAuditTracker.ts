export class HrAttendanceRecordAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrAttendanceRecord API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
