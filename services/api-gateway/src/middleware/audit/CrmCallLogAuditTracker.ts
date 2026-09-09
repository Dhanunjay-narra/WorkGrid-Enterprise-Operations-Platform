export class CrmCallLogAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmCallLog API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
