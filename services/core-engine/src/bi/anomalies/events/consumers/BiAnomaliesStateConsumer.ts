export class BiAnomaliesStateConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiAnomaliesState created event for entity " + event.entityId + " in bi_anomalies");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiAnomaliesState updated event for entity " + event.entityId + " in bi_anomalies");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed BiAnomaliesState deleted event for entity " + event.entityId + " in bi_anomalies");
  }
}
