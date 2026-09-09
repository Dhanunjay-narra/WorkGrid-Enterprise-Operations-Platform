export class CommWebhookDispatchLogAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CommWebhookDispatchLog API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
