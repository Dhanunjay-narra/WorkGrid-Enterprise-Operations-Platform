export class AiToolsScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiToolsSchedule created event for entity " + event.entityId + " in ai_tools");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiToolsSchedule updated event for entity " + event.entityId + " in ai_tools");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiToolsSchedule deleted event for entity " + event.entityId + " in ai_tools");
  }
}
