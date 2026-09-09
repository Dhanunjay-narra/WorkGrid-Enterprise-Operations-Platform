export class IdPolicyAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdPolicy API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
