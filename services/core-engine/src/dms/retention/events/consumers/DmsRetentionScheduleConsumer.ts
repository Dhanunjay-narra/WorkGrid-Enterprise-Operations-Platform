export class DmsRetentionScheduleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsRetentionSchedule created event for entity " + event.entityId + " in dms_retention");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsRetentionSchedule updated event for entity " + event.entityId + " in dms_retention");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed DmsRetentionSchedule deleted event for entity " + event.entityId + " in dms_retention");
  }
}
