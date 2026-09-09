export class HrSkillMatrixAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrSkillMatrix API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
