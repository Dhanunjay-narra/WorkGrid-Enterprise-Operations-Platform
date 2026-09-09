export class AiModelRoutingRuleAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] AiModelRoutingRule API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
