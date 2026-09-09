export class AiGatewayRuleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiGatewayRule created event for entity " + event.entityId + " in ai_gateway");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiGatewayRule updated event for entity " + event.entityId + " in ai_gateway");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiGatewayRule deleted event for entity " + event.entityId + " in ai_gateway");
  }
}
