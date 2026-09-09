export class RbacPolicyConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed RbacPolicy created event for entity " + event.entityId + " in rbac");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed RbacPolicy updated event for entity " + event.entityId + " in rbac");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed RbacPolicy deleted event for entity " + event.entityId + " in rbac");
  }
}
