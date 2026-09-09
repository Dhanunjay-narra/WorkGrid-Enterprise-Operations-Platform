export class HrPayrollSummaryConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPayrollSummary created event for entity " + event.entityId + " in hr_payroll");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPayrollSummary updated event for entity " + event.entityId + " in hr_payroll");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPayrollSummary deleted event for entity " + event.entityId + " in hr_payroll");
  }
}
