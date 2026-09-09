export class CrmStageAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmStage API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
