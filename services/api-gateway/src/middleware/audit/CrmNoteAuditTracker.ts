export class CrmNoteAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmNote API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
