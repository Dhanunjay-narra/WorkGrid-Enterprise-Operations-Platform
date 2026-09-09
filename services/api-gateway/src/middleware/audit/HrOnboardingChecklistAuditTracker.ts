export class HrOnboardingChecklistAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrOnboardingChecklist API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
