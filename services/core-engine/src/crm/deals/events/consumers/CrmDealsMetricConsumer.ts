export class CrmDealsMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmDealsMetric created event for entity " + event.entityId + " in crm_deals");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmDealsMetric updated event for entity " + event.entityId + " in crm_deals");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmDealsMetric deleted event for entity " + event.entityId + " in crm_deals");
  }
}
