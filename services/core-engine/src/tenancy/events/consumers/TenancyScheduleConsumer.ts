export class TenancyScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed TenancySchedule created event for entity " + event.entityId + " in tenancy");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed TenancySchedule updated event for entity " + event.entityId + " in tenancy");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed TenancySchedule deleted event for entity " + event.entityId + " in tenancy");
  }
}
