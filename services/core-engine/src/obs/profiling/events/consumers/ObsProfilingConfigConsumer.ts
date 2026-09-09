export class ObsProfilingConfigConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsProfilingConfig created event for entity " + event.entityId + " in obs_profiling");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsProfilingConfig updated event for entity " + event.entityId + " in obs_profiling");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsProfilingConfig deleted event for entity " + event.entityId + " in obs_profiling");
  }
}
