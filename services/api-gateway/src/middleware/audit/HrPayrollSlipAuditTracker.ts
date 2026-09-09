export class HrPayrollSlipAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrPayrollSlip API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
