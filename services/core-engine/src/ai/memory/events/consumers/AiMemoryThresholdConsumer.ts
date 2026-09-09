export class AiMemoryThresholdConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiMemoryThreshold created event for entity " + event.entityId + " in ai_memory");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiMemoryThreshold updated event for entity " + event.entityId + " in ai_memory");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiMemoryThreshold deleted event for entity " + event.entityId + " in ai_memory");
  }
}
