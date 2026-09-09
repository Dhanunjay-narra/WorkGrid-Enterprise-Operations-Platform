export class EventsMetricsAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsMetricsAuditLog created event for entity " + event.entityId + " in events_metrics");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsMetricsAuditLog updated event for entity " + event.entityId + " in events_metrics");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed EventsMetricsAuditLog deleted event for entity " + event.entityId + " in events_metrics");
  }
}
