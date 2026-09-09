export class ObsTracingEntryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsTracingEntry created event for entity " + event.entityId + " in obs_tracing");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsTracingEntry updated event for entity " + event.entityId + " in obs_tracing");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsTracingEntry deleted event for entity " + event.entityId + " in obs_tracing");
  }
}
