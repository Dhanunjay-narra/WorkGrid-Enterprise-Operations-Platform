export class DocChunkIndexAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] DocChunkIndex API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
