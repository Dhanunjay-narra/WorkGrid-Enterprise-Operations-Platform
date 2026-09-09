export class CrmTerritoryRuleConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmTerritoryRule created event for entity " + event.entityId + " in crm_territory");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmTerritoryRule updated event for entity " + event.entityId + " in crm_territory");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed CrmTerritoryRule deleted event for entity " + event.entityId + " in crm_territory");
  }
}
