export class HrPerformanceReviewAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrPerformanceReview API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
