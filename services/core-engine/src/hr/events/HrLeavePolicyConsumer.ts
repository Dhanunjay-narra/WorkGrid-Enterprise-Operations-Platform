export class HrLeavePolicyConsumer {
  public async handleCreated(eventPayload: { entityId: string; tenantId: string; timestamp: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrLeavePolicy created event for entity " + eventPayload.entityId);
  }

  public async handleUpdated(eventPayload: { entityId: string; tenantId: string; changedFields: string[] }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrLeavePolicy updated event for entity " + eventPayload.entityId);
  }

  public async handleDeleted(eventPayload: { entityId: string; tenantId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrLeavePolicy deleted event for entity " + eventPayload.entityId);
  }
}
