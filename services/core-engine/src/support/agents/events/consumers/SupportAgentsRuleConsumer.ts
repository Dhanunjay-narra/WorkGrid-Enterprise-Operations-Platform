export class SupportAgentsRuleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportAgentsRule created event for entity " + event.entityId + " in support_agents");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportAgentsRule updated event for entity " + event.entityId + " in support_agents");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed SupportAgentsRule deleted event for entity " + event.entityId + " in support_agents");
  }
}
