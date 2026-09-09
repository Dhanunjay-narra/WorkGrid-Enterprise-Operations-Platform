export class IdPermissionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdPermission API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
