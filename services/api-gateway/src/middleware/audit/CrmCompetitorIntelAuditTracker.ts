export class CrmCompetitorIntelAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmCompetitorIntel API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
