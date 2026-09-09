export class IntOauthNodeConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntOauthNode created event for entity " + event.entityId + " in int_oauth");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntOauthNode updated event for entity " + event.entityId + " in int_oauth");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed IntOauthNode deleted event for entity " + event.entityId + " in int_oauth");
  }
}
