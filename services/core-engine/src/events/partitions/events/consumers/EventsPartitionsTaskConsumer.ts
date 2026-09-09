export class EventsPartitionsTaskConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsPartitionsTask created event for entity " + event.entityId + " in events_partitions");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsPartitionsTask updated event for entity " + event.entityId + " in events_partitions");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsPartitionsTask deleted event for entity " + event.entityId + " in events_partitions");
  }
}
