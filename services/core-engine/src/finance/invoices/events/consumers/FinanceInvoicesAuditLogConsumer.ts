export class FinanceInvoicesAuditLogConsumer {
  public async handleCreated(event: { id: string; tenantId: string; entityId: string; occurredAt: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceInvoicesAuditLog created event for entity " + event.entityId + " in finance_invoices");
  }

  public async handleUpdated(event: { id: string; tenantId: string; entityId: string; delta: Record<string, any> }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceInvoicesAuditLog updated event for entity " + event.entityId + " in finance_invoices");
  }

  public async handleDeleted(event: { id: string; tenantId: string; entityId: string }): Promise<void> {
    console.log("[EVENT-BUS] Consumed FinanceInvoicesAuditLog deleted event for entity " + event.entityId + " in finance_invoices");
  }
}
