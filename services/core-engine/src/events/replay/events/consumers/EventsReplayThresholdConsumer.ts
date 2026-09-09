export class EventsReplayThresholdConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsReplayThreshold created event for entity " + event.entityId + " in events_replay");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsReplayThreshold updated event for entity " + event.entityId + " in events_replay");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsReplayThreshold deleted event for entity " + event.entityId + " in events_replay");
  }
}
