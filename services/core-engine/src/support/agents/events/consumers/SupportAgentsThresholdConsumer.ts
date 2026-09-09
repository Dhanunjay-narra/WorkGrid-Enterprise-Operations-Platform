export class SupportAgentsThresholdConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportAgentsThreshold created event for entity " + event.entityId + " in support_agents");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportAgentsThreshold updated event for entity " + event.entityId + " in support_agents");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportAgentsThreshold deleted event for entity " + event.entityId + " in support_agents");
  }
}
