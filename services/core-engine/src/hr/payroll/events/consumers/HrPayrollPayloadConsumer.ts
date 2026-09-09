export class HrPayrollPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPayrollPayload created event for entity " + event.entityId + " in hr_payroll");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPayrollPayload updated event for entity " + event.entityId + " in hr_payroll");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPayrollPayload deleted event for entity " + event.entityId + " in hr_payroll");
  }
}
