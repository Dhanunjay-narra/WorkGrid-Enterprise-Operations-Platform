export class HrPayrollEventConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPayrollEvent created event for entity " + event.entityId + " in hr_payroll");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPayrollEvent updated event for entity " + event.entityId + " in hr_payroll");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPayrollEvent deleted event for entity " + event.entityId + " in hr_payroll");
  }
}
