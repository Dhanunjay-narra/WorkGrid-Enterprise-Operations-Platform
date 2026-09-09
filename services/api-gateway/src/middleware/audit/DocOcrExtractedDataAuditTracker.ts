export class DocOcrExtractedDataAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] DocOcrExtractedData API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
