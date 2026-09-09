export class AiEvaluationScoreAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] AiEvaluationScore API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
