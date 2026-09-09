export class BiForecastsConfigConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiForecastsConfig created event for entity " + event.entityId + " in bi_forecasts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiForecastsConfig updated event for entity " + event.entityId + " in bi_forecasts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiForecastsConfig deleted event for entity " + event.entityId + " in bi_forecasts");
  }
}
