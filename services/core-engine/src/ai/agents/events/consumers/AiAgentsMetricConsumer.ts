export class AiAgentsMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiAgentsMetric created event for entity " + event.entityId + " in ai_agents");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiAgentsMetric updated event for entity " + event.entityId + " in ai_agents");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed AiAgentsMetric deleted event for entity " + event.entityId + " in ai_agents");
  }
}
