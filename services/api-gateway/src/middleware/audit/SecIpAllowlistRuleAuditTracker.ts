export class SecIpAllowlistRuleAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SecIpAllowlistRule API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
