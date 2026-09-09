export class DocFolderAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] DocFolder API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
