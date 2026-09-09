export class SupTicketAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] SupTicket API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
