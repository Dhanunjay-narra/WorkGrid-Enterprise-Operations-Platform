export class HrShiftsTransactionConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrShiftsTransaction created event for entity " + event.entityId + " in hr_shifts");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrShiftsTransaction updated event for entity " + event.entityId + " in hr_shifts");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrShiftsTransaction deleted event for entity " + event.entityId + " in hr_shifts");
  }
}
