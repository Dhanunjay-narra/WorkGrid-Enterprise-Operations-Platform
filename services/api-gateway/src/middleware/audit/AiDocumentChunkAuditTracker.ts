export class AiDocumentChunkAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] AiDocumentChunk API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
