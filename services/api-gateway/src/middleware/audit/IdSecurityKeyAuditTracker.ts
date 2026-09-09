export class IdSecurityKeyAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdSecurityKey API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
