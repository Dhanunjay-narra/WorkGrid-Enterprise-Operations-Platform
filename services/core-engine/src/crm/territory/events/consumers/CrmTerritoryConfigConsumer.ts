export class CrmTerritoryConfigConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmTerritoryConfig created event for entity " + event.entityId + " in crm_territory");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmTerritoryConfig updated event for entity " + event.entityId + " in crm_territory");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmTerritoryConfig deleted event for entity " + event.entityId + " in crm_territory");
  }
}
