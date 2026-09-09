export class AiGatewayMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiGatewayMetric created event for entity " + event.entityId + " in ai_gateway");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiGatewayMetric updated event for entity " + event.entityId + " in ai_gateway");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiGatewayMetric deleted event for entity " + event.entityId + " in ai_gateway");
  }
}
