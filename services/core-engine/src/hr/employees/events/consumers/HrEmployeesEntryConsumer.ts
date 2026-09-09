export class HrEmployeesEntryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrEmployeesEntry created event for entity " + event.entityId + " in hr_employees");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrEmployeesEntry updated event for entity " + event.entityId + " in hr_employees");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrEmployeesEntry deleted event for entity " + event.entityId + " in hr_employees");
  }
}
