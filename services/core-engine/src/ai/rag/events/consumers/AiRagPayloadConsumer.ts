export class AiRagPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiRagPayload created event for entity " + event.entityId + " in ai_rag");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiRagPayload updated event for entity " + event.entityId + " in ai_rag");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiRagPayload deleted event for entity " + event.entityId + " in ai_rag");
  }
}
