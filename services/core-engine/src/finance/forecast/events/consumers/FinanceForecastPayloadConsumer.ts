export class FinanceForecastPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceForecastPayload created event for entity " + event.entityId + " in finance_forecast");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceForecastPayload updated event for entity " + event.entityId + " in finance_forecast");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceForecastPayload deleted event for entity " + event.entityId + " in finance_forecast");
  }
}
