export class IotThresholdsEventConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotThresholdsEvent created event for entity " + event.entityId + " in iot_thresholds");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotThresholdsEvent updated event for entity " + event.entityId + " in iot_thresholds");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotThresholdsEvent deleted event for entity " + event.entityId + " in iot_thresholds");
  }
}
