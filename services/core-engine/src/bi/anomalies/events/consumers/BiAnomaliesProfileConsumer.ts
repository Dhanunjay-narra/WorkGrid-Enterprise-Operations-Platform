export class BiAnomaliesProfileConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiAnomaliesProfile created event for entity " + event.entityId + " in bi_anomalies");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiAnomaliesProfile updated event for entity " + event.entityId + " in bi_anomalies");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiAnomaliesProfile deleted event for entity " + event.entityId + " in bi_anomalies");
  }
}
