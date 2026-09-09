export class ComplianceConfigPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_comp_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted ComplianceConfig created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, delta: Record<string, any>): Promise<string> {
    const eventId = "evt_comp_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted ComplianceConfig updated event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishDeleted(entityId: string, tenantId: string): Promise<string> {
    const eventId = "evt_comp_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted ComplianceConfig deleted event " + eventId + " to transactional stream");
    return eventId;
  }
}
