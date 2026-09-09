export class FinanceForecastNodeConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceForecastNode created event for entity " + event.entityId + " in finance_forecast");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceForecastNode updated event for entity " + event.entityId + " in finance_forecast");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceForecastNode deleted event for entity " + event.entityId + " in finance_forecast");
  }
}
