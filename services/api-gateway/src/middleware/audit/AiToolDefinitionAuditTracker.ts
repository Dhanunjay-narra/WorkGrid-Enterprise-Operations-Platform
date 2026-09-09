export class AiToolDefinitionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] AiToolDefinition API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
