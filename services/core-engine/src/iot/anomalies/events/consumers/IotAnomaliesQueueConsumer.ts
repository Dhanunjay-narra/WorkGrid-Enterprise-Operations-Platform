export class IotAnomaliesQueueConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotAnomaliesQueue created event for entity " + event.entityId + " in iot_anomalies");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotAnomaliesQueue updated event for entity " + event.entityId + " in iot_anomalies");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotAnomaliesQueue deleted event for entity " + event.entityId + " in iot_anomalies");
  }
}
