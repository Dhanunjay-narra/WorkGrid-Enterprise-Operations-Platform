export class CrmAccountAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmAccount API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
