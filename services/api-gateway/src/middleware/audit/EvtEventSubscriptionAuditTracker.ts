export class EvtEventSubscriptionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] EvtEventSubscription API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
