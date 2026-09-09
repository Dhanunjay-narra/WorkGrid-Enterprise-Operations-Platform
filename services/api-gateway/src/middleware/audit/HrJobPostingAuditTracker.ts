export class HrJobPostingAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrJobPosting API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
