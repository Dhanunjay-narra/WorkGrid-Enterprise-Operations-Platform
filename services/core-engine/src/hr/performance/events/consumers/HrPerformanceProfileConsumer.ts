export class HrPerformanceProfileConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPerformanceProfile created event for entity " + event.entityId + " in hr_performance");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPerformanceProfile updated event for entity " + event.entityId + " in hr_performance");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrPerformanceProfile deleted event for entity " + event.entityId + " in hr_performance");
  }
}
