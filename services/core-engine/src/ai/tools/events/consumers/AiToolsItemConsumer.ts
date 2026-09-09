export class AiToolsItemConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiToolsItem created event for entity " + event.entityId + " in ai_tools");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiToolsItem updated event for entity " + event.entityId + " in ai_tools");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiToolsItem deleted event for entity " + event.entityId + " in ai_tools");
  }
}
