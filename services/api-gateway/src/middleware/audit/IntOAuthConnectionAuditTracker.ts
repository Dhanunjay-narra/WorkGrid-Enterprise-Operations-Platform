export class IntOAuthConnectionAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IntOAuthConnection API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
