export class EvtDomainEventSchemaAuditTracker {
  public static trackRequest(req: any, responseStatus: number): void {
    console.log("[AUDIT-TRACKER] EvtDomainEventSchema API Call | Method: " + req.method + " | Status: " + responseStatus);
  }
}
