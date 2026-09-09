export class CommBroadcastAnnouncementAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommBroadcastAnnouncement API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
