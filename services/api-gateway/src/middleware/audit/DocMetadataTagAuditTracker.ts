export class DocMetadataTagAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] DocMetadataTag API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
