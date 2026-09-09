export class CrmTerritoryAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmTerritory API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
