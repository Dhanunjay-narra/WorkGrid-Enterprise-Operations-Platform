export class DocDocumentFileAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] DocDocumentFile API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
