export class AiEmbeddingsMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEmbeddingsMetric created event for entity " + event.entityId + " in ai_embeddings");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEmbeddingsMetric updated event for entity " + event.entityId + " in ai_embeddings");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiEmbeddingsMetric deleted event for entity " + event.entityId + " in ai_embeddings");
  }
}
