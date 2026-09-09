export class IntWebhookSubscriptionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IntWebhookSubscription API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
