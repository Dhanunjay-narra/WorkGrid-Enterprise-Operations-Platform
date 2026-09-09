export class DocDocumentVersionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] DocDocumentVersion API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
