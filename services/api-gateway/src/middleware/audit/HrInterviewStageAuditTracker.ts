export class HrInterviewStageAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrInterviewStage API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
