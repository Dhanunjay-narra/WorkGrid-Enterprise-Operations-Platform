export class IntWebhookEventLogAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IntWebhookEventLog API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
