export class IntSyncHistoryAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IntSyncHistory API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
