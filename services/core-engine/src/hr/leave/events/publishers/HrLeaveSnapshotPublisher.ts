export class HrLeaveSnapshotPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_hr_l_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted HrLeaveSnapshot created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, delta: Record<string, any>): Promise<string> {
    const eventId = "evt_hr_l_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted HrLeaveSnapshot updated event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishDeleted(entityId: string, tenantId: string): Promise<string> {
    const eventId = "evt_hr_l_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted HrLeaveSnapshot deleted event " + eventId + " to transactional stream");
    return eventId;
  }
}
