import { ObsProfilingTransactionModel, ObsProfilingTransactionValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingTransaction";

export class ObsProfilingTransactionService {
  private repository = new Map<string, ObsProfilingTransactionModel>();

  public create(data: Omit<ObsProfilingTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingTransactionModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingTransactionModel>): ObsProfilingTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingTransactionModel = {
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
