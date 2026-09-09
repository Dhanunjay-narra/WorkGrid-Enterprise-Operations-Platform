export class CommNotificationPreferenceAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommNotificationPreference API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
