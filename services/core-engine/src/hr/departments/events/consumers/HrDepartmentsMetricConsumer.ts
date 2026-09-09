export class HrDepartmentsMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrDepartmentsMetric created event for entity " + event.entityId + " in hr_departments");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrDepartmentsMetric updated event for entity " + event.entityId + " in hr_departments");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrDepartmentsMetric deleted event for entity " + event.entityId + " in hr_departments");
  }
}
