export class EvtDeadLetterEventAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] EvtDeadLetterEvent API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
