export class FinJournalEntryAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] FinJournalEntry API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
