import { ObsSpansTransactionModel, ObsSpansTransactionValidator } from "@nexora/types/domains/obs/spans/ObsSpansTransaction";

export class ObsSpansTransactionService {
  private repository = new Map<string, ObsSpansTransactionModel>();

  public create(data: Omit<ObsSpansTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansTransactionModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansTransactionModel>): ObsSpansTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansTransactionModel = {
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
