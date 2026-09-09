export class EvtStreamSnapshotAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] EvtStreamSnapshot API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
