export class AiMemoryAssignmentConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiMemoryAssignment created event for entity " + event.entityId + " in ai_memory");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiMemoryAssignment updated event for entity " + event.entityId + " in ai_memory");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiMemoryAssignment deleted event for entity " + event.entityId + " in ai_memory");
  }
}
