export class HrPerformanceStateConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPerformanceState created event for entity " + event.entityId + " in hr_performance");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPerformanceState updated event for entity " + event.entityId + " in hr_performance");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPerformanceState deleted event for entity " + event.entityId + " in hr_performance");
  }
}
