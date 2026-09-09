export class ObsTracingPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsTracingPolicy created event for entity " + event.entityId + " in obs_tracing");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsTracingPolicy updated event for entity " + event.entityId + " in obs_tracing");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsTracingPolicy deleted event for entity " + event.entityId + " in obs_tracing");
  }
}
