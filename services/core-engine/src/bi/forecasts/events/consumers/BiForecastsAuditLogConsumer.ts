export class BiForecastsAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiForecastsAuditLog created event for entity " + event.entityId + " in bi_forecasts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiForecastsAuditLog updated event for entity " + event.entityId + " in bi_forecasts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiForecastsAuditLog deleted event for entity " + event.entityId + " in bi_forecasts");
  }
}
