export class AiAgentMemoryEntryAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] AiAgentMemoryEntry API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
