export class ObsSpansSummaryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsSpansSummary created event for entity " + event.entityId + " in obs_spans");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsSpansSummary updated event for entity " + event.entityId + " in obs_spans");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ObsSpansSummary deleted event for entity " + event.entityId + " in obs_spans");
  }
}
