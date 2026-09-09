export class CrmForecastingSummaryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmForecastingSummary created event for entity " + event.entityId + " in crm_forecasting");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmForecastingSummary updated event for entity " + event.entityId + " in crm_forecasting");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmForecastingSummary deleted event for entity " + event.entityId + " in crm_forecasting");
  }
}
