import { ObsAlertsTransactionModel, ObsAlertsTransactionValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsTransaction";

export class ObsAlertsTransactionService {
  private repository = new Map<string, ObsAlertsTransactionModel>();

  public create(data: Omit<ObsAlertsTransactionModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsTransactionModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsTransactionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsTransactionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsTransaction: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsTransactionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsTransactionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsTransactionModel>): ObsAlertsTransactionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsTransactionModel = {
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
