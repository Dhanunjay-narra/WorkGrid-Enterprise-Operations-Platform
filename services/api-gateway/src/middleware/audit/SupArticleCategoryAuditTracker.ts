export class SupArticleCategoryAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupArticleCategory API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
