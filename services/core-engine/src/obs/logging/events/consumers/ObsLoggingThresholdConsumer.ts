export class ObsLoggingThresholdConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsLoggingThreshold created event for entity " + event.entityId + " in obs_logging");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsLoggingThreshold updated event for entity " + event.entityId + " in obs_logging");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsLoggingThreshold deleted event for entity " + event.entityId + " in obs_logging");
  }
}
