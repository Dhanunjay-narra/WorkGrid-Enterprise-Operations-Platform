export class HrDepartmentsStateConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrDepartmentsState created event for entity " + event.entityId + " in hr_departments");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrDepartmentsState updated event for entity " + event.entityId + " in hr_departments");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrDepartmentsState deleted event for entity " + event.entityId + " in hr_departments");
  }
}
