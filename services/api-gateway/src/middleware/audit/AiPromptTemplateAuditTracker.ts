export class AiPromptTemplateAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] AiPromptTemplate API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
