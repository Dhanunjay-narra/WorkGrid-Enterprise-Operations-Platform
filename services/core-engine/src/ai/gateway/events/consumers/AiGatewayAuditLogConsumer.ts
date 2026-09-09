export class AiGatewayAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiGatewayAuditLog created event for entity " + event.entityId + " in ai_gateway");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiGatewayAuditLog updated event for entity " + event.entityId + " in ai_gateway");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiGatewayAuditLog deleted event for entity " + event.entityId + " in ai_gateway");
  }
}
