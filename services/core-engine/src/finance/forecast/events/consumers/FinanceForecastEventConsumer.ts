export class FinanceForecastEventConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceForecastEvent created event for entity " + event.entityId + " in finance_forecast");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceForecastEvent updated event for entity " + event.entityId + " in finance_forecast");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceForecastEvent deleted event for entity " + event.entityId + " in finance_forecast");
  }
}
