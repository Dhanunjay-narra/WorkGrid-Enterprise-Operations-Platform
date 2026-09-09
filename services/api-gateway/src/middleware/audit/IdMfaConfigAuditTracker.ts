export class IdMfaConfigAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdMfaConfig API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
