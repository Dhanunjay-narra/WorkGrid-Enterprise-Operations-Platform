export class DocAccessLogAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] DocAccessLog API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
