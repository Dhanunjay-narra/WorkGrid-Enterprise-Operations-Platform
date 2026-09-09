export class HrLeavePolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrLeavePolicy created event for entity " + event.entityId + " in hr_leave");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrLeavePolicy updated event for entity " + event.entityId + " in hr_leave");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrLeavePolicy deleted event for entity " + event.entityId + " in hr_leave");
  }
}
