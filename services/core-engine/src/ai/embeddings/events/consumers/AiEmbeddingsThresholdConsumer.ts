export class AiEmbeddingsThresholdConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEmbeddingsThreshold created event for entity " + event.entityId + " in ai_embeddings");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEmbeddingsThreshold updated event for entity " + event.entityId + " in ai_embeddings");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEmbeddingsThreshold deleted event for entity " + event.entityId + " in ai_embeddings");
  }
}
