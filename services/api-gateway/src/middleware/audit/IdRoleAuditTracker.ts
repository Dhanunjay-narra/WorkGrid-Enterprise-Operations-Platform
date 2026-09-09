export class IdRoleAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdRole API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
