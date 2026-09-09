export class EvtEventBatchAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] EvtEventBatch API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
