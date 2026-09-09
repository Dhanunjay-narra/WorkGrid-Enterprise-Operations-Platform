import { Invoice, UUID } from '@nexora/types';

export class FinanceEngine {
  private invoices = new Map<UUID, Invoice>();

  public createInvoice(tenantId: UUID, totalAmount: number, currency: string = 'USD'): Invoice {
    const inv: Invoice = {
      id: 'inv_' + Math.random().toString(36).substring(2, 9),
      tenantId,
      invoiceNumber: 'INV-' + Date.now().toString().slice(-6),
      totalAmount,
      currency,
      status: 'ISSUED'
    };
    this.invoices.set(inv.id, inv);
    return inv;
  }

  public markPaid(invoiceId: UUID): boolean {
    const inv = this.invoices.get(invoiceId);
    if (!inv) return false;
    inv.status = 'PAID';
    return true;
  }
}
