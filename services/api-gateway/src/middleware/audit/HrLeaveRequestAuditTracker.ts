export class HrLeaveRequestAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrLeaveRequest API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
