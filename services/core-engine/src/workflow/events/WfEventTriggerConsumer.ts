export class WfEventTriggerConsumer {
  public async handleCreated(eventPayload: { entityId: string; tenantId: string; timestamp: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WfEventTrigger created event for entity " + eventPayload.entityId);
  }

  public async handleUpdated(eventPayload: { entityId: string; tenantId: string; changedFields: string[] }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WfEventTrigger updated event for entity " + eventPayload.entityId);
  }

  public async handleDeleted(eventPayload: { entityId: string; tenantId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed WfEventTrigger deleted event for entity " + eventPayload.entityId);
  }
}
