export class HrShiftsItemConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrShiftsItem created event for entity " + event.entityId + " in hr_shifts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrShiftsItem updated event for entity " + event.entityId + " in hr_shifts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrShiftsItem deleted event for entity " + event.entityId + " in hr_shifts");
  }
}
