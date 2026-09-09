export class BiForecastsTaskConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiForecastsTask created event for entity " + event.entityId + " in bi_forecasts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiForecastsTask updated event for entity " + event.entityId + " in bi_forecasts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiForecastsTask deleted event for entity " + event.entityId + " in bi_forecasts");
  }
}
