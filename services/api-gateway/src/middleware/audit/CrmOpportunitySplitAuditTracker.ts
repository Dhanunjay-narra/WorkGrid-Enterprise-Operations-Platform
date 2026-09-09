export class CrmOpportunitySplitAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmOpportunitySplit API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
