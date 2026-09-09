export class IdTenantAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IdTenant API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
