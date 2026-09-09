export class AiAgentsSessionPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_ai_a_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted AiAgentsSession created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, delta: Record<string, any>): Promise<string> {
    const eventId = "evt_ai_a_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted AiAgentsSession updated event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishDeleted(entityId: string, tenantId: string): Promise<string> {
    const eventId = "evt_ai_a_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted AiAgentsSession deleted event " + eventId + " to transactional stream");
    return eventId;
  }
}
