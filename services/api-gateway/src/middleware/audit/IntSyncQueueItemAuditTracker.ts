export class IntSyncQueueItemAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IntSyncQueueItem API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
