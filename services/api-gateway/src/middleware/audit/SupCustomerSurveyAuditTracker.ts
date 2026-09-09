export class SupCustomerSurveyAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupCustomerSurvey API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
