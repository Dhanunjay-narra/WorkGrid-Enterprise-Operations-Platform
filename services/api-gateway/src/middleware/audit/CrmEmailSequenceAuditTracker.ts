export class CrmEmailSequenceAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmEmailSequence API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
