export class IotThresholdsBatchConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotThresholdsBatch created event for entity " + event.entityId + " in iot_thresholds");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotThresholdsBatch updated event for entity " + event.entityId + " in iot_thresholds");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IotThresholdsBatch deleted event for entity " + event.entityId + " in iot_thresholds");
  }
}
