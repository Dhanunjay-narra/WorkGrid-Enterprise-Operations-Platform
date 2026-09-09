export class HrDepartmentsNodeConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrDepartmentsNode created event for entity " + event.entityId + " in hr_departments");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrDepartmentsNode updated event for entity " + event.entityId + " in hr_departments");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrDepartmentsNode deleted event for entity " + event.entityId + " in hr_departments");
  }
}
