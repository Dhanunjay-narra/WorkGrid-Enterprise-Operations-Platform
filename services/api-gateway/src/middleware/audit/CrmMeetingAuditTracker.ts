export class CrmMeetingAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmMeeting API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
