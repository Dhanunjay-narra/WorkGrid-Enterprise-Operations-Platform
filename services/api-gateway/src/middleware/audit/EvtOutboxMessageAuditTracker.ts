export class EvtOutboxMessageAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] EvtOutboxMessage API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
