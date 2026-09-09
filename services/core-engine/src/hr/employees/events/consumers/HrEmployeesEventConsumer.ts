export class HrEmployeesEventConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrEmployeesEvent created event for entity " + event.entityId + " in hr_employees");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrEmployeesEvent updated event for entity " + event.entityId + " in hr_employees");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrEmployeesEvent deleted event for entity " + event.entityId + " in hr_employees");
  }
}
