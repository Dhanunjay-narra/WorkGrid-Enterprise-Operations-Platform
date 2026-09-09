export class PrjWorkloadCapacityAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] PrjWorkloadCapacity API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
