export class IotFleetMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFleetMetric created event for entity " + event.entityId + " in iot_fleet");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFleetMetric updated event for entity " + event.entityId + " in iot_fleet");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotFleetMetric deleted event for entity " + event.entityId + " in iot_fleet");
  }
}
