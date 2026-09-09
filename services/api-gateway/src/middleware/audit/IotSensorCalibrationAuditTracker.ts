export class IotSensorCalibrationAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IotSensorCalibration API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
