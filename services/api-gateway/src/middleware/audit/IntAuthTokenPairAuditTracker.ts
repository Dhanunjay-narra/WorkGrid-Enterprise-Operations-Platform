export class IntAuthTokenPairAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IntAuthTokenPair API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
