export class FinanceTaxesAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTaxesAuditLog created event for entity " + event.entityId + " in finance_taxes");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTaxesAuditLog updated event for entity " + event.entityId + " in finance_taxes");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceTaxesAuditLog deleted event for entity " + event.entityId + " in finance_taxes");
  }
}
