export class HrSalaryComponentAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrSalaryComponent API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
