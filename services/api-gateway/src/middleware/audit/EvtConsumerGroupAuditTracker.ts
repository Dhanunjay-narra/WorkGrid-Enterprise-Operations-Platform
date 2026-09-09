export class EvtConsumerGroupAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] EvtConsumerGroup API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
