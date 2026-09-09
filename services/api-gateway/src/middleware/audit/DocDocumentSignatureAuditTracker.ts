export class DocDocumentSignatureAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] DocDocumentSignature API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
