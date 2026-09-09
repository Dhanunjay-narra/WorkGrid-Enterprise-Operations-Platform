export class ObsTracingTaskConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsTracingTask created event for entity " + event.entityId + " in obs_tracing");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsTracingTask updated event for entity " + event.entityId + " in obs_tracing");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsTracingTask deleted event for entity " + event.entityId + " in obs_tracing");
  }
}
