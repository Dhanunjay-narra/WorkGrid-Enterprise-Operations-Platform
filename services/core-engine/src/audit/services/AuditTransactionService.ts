import { AuditTransactionModel, AuditTransactionValidator } from "@nexora/types/domains/audit/AuditTransaction";

export class AuditTransactionService {
  private repository = new Map<string, AuditTransactionModel>();

  public create(data: Omit<AuditTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): AuditTransactionModel {
    const id = "audi_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuditTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuditTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuditTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuditTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuditTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuditTransactionModel>): AuditTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuditTransactionModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
