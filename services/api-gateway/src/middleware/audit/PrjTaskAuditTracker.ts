export class PrjTaskAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjTask API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
