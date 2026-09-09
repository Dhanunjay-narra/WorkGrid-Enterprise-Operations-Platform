export class CommPresencePayloadConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommPresencePayload created event for entity " + event.entityId + " in comm_presence");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommPresencePayload updated event for entity " + event.entityId + " in comm_presence");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CommPresencePayload deleted event for entity " + event.entityId + " in comm_presence");
  }
}
