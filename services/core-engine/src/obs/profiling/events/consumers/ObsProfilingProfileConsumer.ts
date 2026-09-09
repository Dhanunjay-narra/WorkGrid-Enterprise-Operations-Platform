export class ObsProfilingProfileConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsProfilingProfile created event for entity " + event.entityId + " in obs_profiling");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsProfilingProfile updated event for entity " + event.entityId + " in obs_profiling");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsProfilingProfile deleted event for entity " + event.entityId + " in obs_profiling");
  }
}
