export class FinFxRateHistoryAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinFxRateHistory API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
