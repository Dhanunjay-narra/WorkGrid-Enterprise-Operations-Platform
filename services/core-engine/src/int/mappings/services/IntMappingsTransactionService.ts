import { IntMappingsTransactionModel, IntMappingsTransactionValidator } from "@nexora/types/domains/int/mappings/IntMappingsTransaction";

export class IntMappingsTransactionService {
  private repository = new Map<string, IntMappingsTransactionModel>();

  public create(data: Omit<IntMappingsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsTransactionModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsTransactionModel>): IntMappingsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsTransactionModel = {
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
