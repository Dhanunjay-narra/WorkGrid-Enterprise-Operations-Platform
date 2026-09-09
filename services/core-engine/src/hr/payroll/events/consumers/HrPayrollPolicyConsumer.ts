export class HrPayrollPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPayrollPolicy created event for entity " + event.entityId + " in hr_payroll");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPayrollPolicy updated event for entity " + event.entityId + " in hr_payroll");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPayrollPolicy deleted event for entity " + event.entityId + " in hr_payroll");
  }
}
