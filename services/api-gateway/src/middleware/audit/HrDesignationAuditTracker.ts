export class HrDesignationAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrDesignation API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
