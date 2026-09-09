export class CrmForecastingItemConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmForecastingItem created event for entity " + event.entityId + " in crm_forecasting");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmForecastingItem updated event for entity " + event.entityId + " in crm_forecasting");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmForecastingItem deleted event for entity " + event.entityId + " in crm_forecasting");
  }
}
