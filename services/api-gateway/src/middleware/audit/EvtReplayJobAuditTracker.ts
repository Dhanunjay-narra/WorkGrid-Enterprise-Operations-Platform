export class EvtReplayJobAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] EvtReplayJob API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
