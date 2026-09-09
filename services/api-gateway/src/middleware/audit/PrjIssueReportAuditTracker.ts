export class PrjIssueReportAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjIssueReport API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
