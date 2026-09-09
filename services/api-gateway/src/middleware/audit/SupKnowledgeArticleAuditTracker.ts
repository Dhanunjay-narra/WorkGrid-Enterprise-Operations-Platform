export class SupKnowledgeArticleAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupKnowledgeArticle API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
