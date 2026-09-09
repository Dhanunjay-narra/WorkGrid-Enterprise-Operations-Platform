export class AiConfidenceScorecardAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] AiConfidenceScorecard API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
