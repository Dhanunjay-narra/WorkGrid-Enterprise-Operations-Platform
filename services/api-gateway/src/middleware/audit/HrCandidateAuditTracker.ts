export class HrCandidateAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] HrCandidate API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
