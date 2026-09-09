import { InvStockAuditData, InvStockAuditValidator } from "../../../../packages/types/src/domains/inventory/InvStockAudit";

export class InvStockAuditService {
  private repository = new Map<string, InvStockAuditData>();

  public create(data: Omit<InvStockAuditData, "id" | "createdAt" | "updatedAt">): InvStockAuditData {
    const id = "inv_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: InvStockAuditData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = InvStockAuditValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for InvStockAudit: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): InvStockAuditData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): InvStockAuditData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<InvStockAuditData>): InvStockAuditData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: InvStockAuditData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
