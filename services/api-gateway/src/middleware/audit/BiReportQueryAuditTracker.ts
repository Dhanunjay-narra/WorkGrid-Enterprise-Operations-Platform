export class BiReportQueryAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] BiReportQuery API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
