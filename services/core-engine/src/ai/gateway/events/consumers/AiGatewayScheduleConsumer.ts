export class AiGatewayScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiGatewaySchedule created event for entity " + event.entityId + " in ai_gateway");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiGatewaySchedule updated event for entity " + event.entityId + " in ai_gateway");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiGatewaySchedule deleted event for entity " + event.entityId + " in ai_gateway");
  }
}
