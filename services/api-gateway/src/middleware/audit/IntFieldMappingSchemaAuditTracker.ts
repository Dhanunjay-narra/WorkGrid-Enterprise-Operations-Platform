export class IntFieldMappingSchemaAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] IntFieldMappingSchema API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
