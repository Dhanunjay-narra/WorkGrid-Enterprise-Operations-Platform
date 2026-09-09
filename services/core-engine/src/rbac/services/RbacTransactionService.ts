import { RbacTransactionModel, RbacTransactionValidator } from "@nexora/types/domains/rbac/RbacTransaction";

export class RbacTransactionService {
  private repository = new Map<string, RbacTransactionModel>();

  public create(data: Omit<RbacTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): RbacTransactionModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacTransactionModel>): RbacTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacTransactionModel = {
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
