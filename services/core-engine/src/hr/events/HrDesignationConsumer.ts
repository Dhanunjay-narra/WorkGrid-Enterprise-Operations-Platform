export class HrDesignationConsumer {
  public async handleCreated(eventPayload: { entityId: string; tenantId: string; timestamp: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrDesignation created event for entity " + eventPayload.entityId);
  }

  public async handleUpdated(eventPayload: { entityId: string; tenantId: string; changedFields: string[] }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrDesignation updated event for entity " + eventPayload.entityId);
  }

  public async handleDeleted(eventPayload: { entityId: string; tenantId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrDesignation deleted event for entity " + eventPayload.entityId);
  }
}
