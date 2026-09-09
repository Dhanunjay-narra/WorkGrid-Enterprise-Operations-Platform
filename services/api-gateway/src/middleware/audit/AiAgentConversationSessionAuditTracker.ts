export class AiAgentConversationSessionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] AiAgentConversationSession API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
