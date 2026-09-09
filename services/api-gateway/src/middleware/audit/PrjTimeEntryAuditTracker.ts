export class PrjTimeEntryAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjTimeEntry API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
