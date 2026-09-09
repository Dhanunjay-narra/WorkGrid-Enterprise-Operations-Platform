export class ProjectCapacityScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacitySchedule created event for entity " + event.entityId + " in project_capacity");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacitySchedule updated event for entity " + event.entityId + " in project_capacity");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed ProjectCapacitySchedule deleted event for entity " + event.entityId + " in project_capacity");
  }
}
