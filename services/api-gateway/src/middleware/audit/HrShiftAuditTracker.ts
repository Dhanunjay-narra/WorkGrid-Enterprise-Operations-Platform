export class HrShiftAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrShift API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
