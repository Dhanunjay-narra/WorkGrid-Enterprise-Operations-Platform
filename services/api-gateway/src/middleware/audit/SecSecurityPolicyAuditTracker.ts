export class SecSecurityPolicyAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SecSecurityPolicy API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
