export class CommNotificationsPayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommNotificationsPayload created event for entity " + event.entityId + " in comm_notifications");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommNotificationsPayload updated event for entity " + event.entityId + " in comm_notifications");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommNotificationsPayload deleted event for entity " + event.entityId + " in comm_notifications");
  }
}
