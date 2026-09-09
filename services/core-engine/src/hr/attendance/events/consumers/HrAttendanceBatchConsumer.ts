export class HrAttendanceBatchConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrAttendanceBatch created event for entity " + event.entityId + " in hr_attendance");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrAttendanceBatch updated event for entity " + event.entityId + " in hr_attendance");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrAttendanceBatch deleted event for entity " + event.entityId + " in hr_attendance");
  }
}
