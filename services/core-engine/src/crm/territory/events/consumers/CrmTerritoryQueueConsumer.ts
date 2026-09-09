export class CrmTerritoryQueueConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmTerritoryQueue created event for entity " + event.entityId + " in crm_territory");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmTerritoryQueue updated event for entity " + event.entityId + " in crm_territory");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmTerritoryQueue deleted event for entity " + event.entityId + " in crm_territory");
  }
}
