export class IotThresholdAlertRuleAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IotThresholdAlertRule API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
