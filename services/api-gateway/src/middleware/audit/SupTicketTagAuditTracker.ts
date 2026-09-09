export class SupTicketTagAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupTicketTag API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
