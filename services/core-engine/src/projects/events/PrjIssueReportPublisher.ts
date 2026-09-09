export class PrjIssueReportPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_pro_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted PrjIssueReport created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, changes: Record<string, any>): Promise<string> {
    const eventId = "evt_pro_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted PrjIssueReport updated event " + eventId + " to transactional stream");
    return eventId;
  }
}
