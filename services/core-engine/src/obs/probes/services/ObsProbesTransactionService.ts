import { ObsProbesTransactionModel, ObsProbesTransactionValidator } from "@nexora/types/domains/obs/probes/ObsProbesTransaction";

export class ObsProbesTransactionService {
  private repository = new Map<string, ObsProbesTransactionModel>();

  public create(data: Omit<ObsProbesTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesTransactionModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesTransactionModel>): ObsProbesTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesTransactionModel = {
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
