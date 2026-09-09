export class CrmActivityAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmActivity API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
