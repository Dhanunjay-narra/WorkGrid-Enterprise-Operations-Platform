export class DocTemplateDocumentAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] DocTemplateDocument API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
