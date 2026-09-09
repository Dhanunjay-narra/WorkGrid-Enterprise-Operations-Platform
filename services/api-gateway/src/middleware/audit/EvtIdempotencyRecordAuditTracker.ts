export class EvtIdempotencyRecordAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] EvtIdempotencyRecord API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
