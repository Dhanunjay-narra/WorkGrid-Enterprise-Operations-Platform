export class AiToolCallRecordAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] AiToolCallRecord API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
