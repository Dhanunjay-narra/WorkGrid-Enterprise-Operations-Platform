export class IntProviderRateLimitAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IntProviderRateLimit API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
