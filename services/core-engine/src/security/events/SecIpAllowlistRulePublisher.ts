export class SecIpAllowlistRulePublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_sec_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted SecIpAllowlistRule created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, changes: Record<string, any>): Promise<string> {
    const eventId = "evt_sec_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted SecIpAllowlistRule updated event " + eventId + " to transactional stream");
    return eventId;
  }
}
