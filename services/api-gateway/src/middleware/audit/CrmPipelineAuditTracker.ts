export class CrmPipelineAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] CrmPipeline API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
