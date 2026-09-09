export class AiModelFallbackLogAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] AiModelFallbackLog API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
