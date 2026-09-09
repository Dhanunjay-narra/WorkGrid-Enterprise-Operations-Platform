export class IotTelemetrySnapshotConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotTelemetrySnapshot created event for entity " + event.entityId + " in iot_telemetry");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotTelemetrySnapshot updated event for entity " + event.entityId + " in iot_telemetry");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotTelemetrySnapshot deleted event for entity " + event.entityId + " in iot_telemetry");
  }
}
