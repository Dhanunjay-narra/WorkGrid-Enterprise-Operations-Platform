export class DocFileExportJobAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] DocFileExportJob API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
