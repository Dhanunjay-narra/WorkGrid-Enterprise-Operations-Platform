export class AiRagPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiRagPolicy created event for entity " + event.entityId + " in ai_rag");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiRagPolicy updated event for entity " + event.entityId + " in ai_rag");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiRagPolicy deleted event for entity " + event.entityId + " in ai_rag");
  }
}
