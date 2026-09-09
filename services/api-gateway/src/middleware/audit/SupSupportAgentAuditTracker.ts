export class SupSupportAgentAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupSupportAgent API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
