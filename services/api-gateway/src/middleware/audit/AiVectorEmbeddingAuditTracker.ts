export class AiVectorEmbeddingAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] AiVectorEmbedding API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
