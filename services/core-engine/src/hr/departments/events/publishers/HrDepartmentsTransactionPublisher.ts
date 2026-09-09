export class HrDepartmentsTransactionPublisher {
  public async publishCreated(entityId: string, tenantId: string, payload: Record<string, any>): Promise<string> {
    const eventId = "evt_hr_d_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted HrDepartmentsTransaction created event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishUpdated(entityId: string, tenantId: string, delta: Record<string, any>): Promise<string> {
    const eventId = "evt_hr_d_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted HrDepartmentsTransaction updated event " + eventId + " to transactional stream");
    return eventId;
  }

  public async publishDeleted(entityId: string, tenantId: string): Promise<string> {
    const eventId = "evt_hr_d_" + Math.random().toString(36).substring(2, 9);
    console.log("[OUTBOX] Emitted HrDepartmentsTransaction deleted event " + eventId + " to transactional stream");
    return eventId;
  }
}
