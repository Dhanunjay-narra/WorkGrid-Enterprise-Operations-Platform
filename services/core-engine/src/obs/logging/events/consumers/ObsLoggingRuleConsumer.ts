export class ObsLoggingRuleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsLoggingRule created event for entity " + event.entityId + " in obs_logging");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsLoggingRule updated event for entity " + event.entityId + " in obs_logging");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsLoggingRule deleted event for entity " + event.entityId + " in obs_logging");
  }
}
