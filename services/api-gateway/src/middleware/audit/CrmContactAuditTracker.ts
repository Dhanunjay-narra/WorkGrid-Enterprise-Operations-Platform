export class CrmContactAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmContact API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
