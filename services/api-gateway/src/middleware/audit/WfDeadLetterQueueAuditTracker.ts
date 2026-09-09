export class WfDeadLetterQueueAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] WfDeadLetterQueue API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
