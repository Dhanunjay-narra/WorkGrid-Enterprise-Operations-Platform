export class IdSsoConfigAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdSsoConfig API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
