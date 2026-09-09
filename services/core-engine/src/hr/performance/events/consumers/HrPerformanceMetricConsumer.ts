export class HrPerformanceMetricConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPerformanceMetric created event for entity " + event.entityId + " in hr_performance");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPerformanceMetric updated event for entity " + event.entityId + " in hr_performance");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPerformanceMetric deleted event for entity " + event.entityId + " in hr_performance");
  }
}
