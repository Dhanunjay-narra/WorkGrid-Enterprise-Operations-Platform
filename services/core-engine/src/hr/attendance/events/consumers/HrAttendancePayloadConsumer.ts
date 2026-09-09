export class HrAttendancePayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrAttendancePayload created event for entity " + event.entityId + " in hr_attendance");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrAttendancePayload updated event for entity " + event.entityId + " in hr_attendance");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed HrAttendancePayload deleted event for entity " + event.entityId + " in hr_attendance");
  }
}
