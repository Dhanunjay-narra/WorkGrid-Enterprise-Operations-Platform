export class CrmForecastingConfigConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmForecastingConfig created event for entity " + event.entityId + " in crm_forecasting");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmForecastingConfig updated event for entity " + event.entityId + " in crm_forecasting");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmForecastingConfig deleted event for entity " + event.entityId + " in crm_forecasting");
  }
}
