export class IotLocationsMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotLocationsMetric created event for entity " + event.entityId + " in iot_locations");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotLocationsMetric updated event for entity " + event.entityId + " in iot_locations");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotLocationsMetric deleted event for entity " + event.entityId + " in iot_locations");
  }
}
