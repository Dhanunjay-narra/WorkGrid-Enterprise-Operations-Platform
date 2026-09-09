export class AiAgentExecutionLogAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] AiAgentExecutionLog API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
