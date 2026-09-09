export class CommNotificationsReportConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommNotificationsReport created event for entity " + event.entityId + " in comm_notifications");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommNotificationsReport updated event for entity " + event.entityId + " in comm_notifications");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommNotificationsReport deleted event for entity " + event.entityId + " in comm_notifications");
  }
}
