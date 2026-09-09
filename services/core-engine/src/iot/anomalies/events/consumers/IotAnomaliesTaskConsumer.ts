export class IotAnomaliesTaskConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotAnomaliesTask created event for entity " + event.entityId + " in iot_anomalies");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotAnomaliesTask updated event for entity " + event.entityId + " in iot_anomalies");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotAnomaliesTask deleted event for entity " + event.entityId + " in iot_anomalies");
  }
}
