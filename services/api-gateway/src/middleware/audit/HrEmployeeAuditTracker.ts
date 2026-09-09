export class HrEmployeeAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrEmployee API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
