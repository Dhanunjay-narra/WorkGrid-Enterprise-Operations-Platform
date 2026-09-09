export class CrmForecastingMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmForecastingMetric created event for entity " + event.entityId + " in crm_forecasting");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmForecastingMetric updated event for entity " + event.entityId + " in crm_forecasting");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmForecastingMetric deleted event for entity " + event.entityId + " in crm_forecasting");
  }
}
