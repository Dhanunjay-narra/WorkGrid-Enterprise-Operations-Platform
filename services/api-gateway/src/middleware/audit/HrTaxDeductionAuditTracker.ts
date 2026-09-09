export class HrTaxDeductionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrTaxDeduction API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
