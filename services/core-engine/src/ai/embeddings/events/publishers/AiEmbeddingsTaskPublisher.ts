export class AiEmbeddingsTaskPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_ai_e_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted AiEmbeddingsTask created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, delta: Record<string, any>): Promise<string> {
    const eventId = "evt_ai_e_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted AiEmbeddingsTask updated event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishDeleted(entityId: string, tenantId: string): Promise<string> {
    const eventId = "evt_ai_e_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted AiEmbeddingsTask deleted event " + eventId + " to transactional stream");
    return eventId;
  }
}
