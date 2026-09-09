export class IotAnomaliesEntryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotAnomaliesEntry created event for entity " + event.entityId + " in iot_anomalies");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotAnomaliesEntry updated event for entity " + event.entityId + " in iot_anomalies");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotAnomaliesEntry deleted event for entity " + event.entityId + " in iot_anomalies");
  }
}
