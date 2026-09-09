export class IotTelemetryEventConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotTelemetryEvent created event for entity " + event.entityId + " in iot_telemetry");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotTelemetryEvent updated event for entity " + event.entityId + " in iot_telemetry");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotTelemetryEvent deleted event for entity " + event.entityId + " in iot_telemetry");
  }
}
