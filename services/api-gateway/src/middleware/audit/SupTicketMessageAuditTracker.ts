export class SupTicketMessageAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupTicketMessage API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
