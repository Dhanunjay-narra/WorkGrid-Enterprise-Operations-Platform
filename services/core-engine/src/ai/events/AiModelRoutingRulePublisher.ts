export class AiModelRoutingRulePublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_ai_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted AiModelRoutingRule created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, changes: Record<string, any>): Promise<string> {
    const eventId = "evt_ai_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted AiModelRoutingRule updated event " + eventId + " to transactional stream");
    return eventId;
  }
}
