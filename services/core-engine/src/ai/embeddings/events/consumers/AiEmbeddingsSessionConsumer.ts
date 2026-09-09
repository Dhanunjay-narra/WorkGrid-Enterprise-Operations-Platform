export class AiEmbeddingsSessionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEmbeddingsSession created event for entity " + event.entityId + " in ai_embeddings");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEmbeddingsSession updated event for entity " + event.entityId + " in ai_embeddings");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEmbeddingsSession deleted event for entity " + event.entityId + " in ai_embeddings");
  }
}
