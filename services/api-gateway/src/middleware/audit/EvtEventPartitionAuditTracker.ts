export class EvtEventPartitionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] EvtEventPartition API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
