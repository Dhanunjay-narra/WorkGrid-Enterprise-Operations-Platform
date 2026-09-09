import { BiCohortsStateModel, BiCohortsStateValidator } from "@nexora/types/domains/bi/cohorts/BiCohortsState";

export class BiCohortsStateService {
  private repository = new Map<string, BiCohortsStateModel>();

  public create(data: Omit<BiCohortsStateModel, "id" | "version" | "createdAt" | "updatedAt">): BiCohortsStateModel {
    const id = "bi_c_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiCohortsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiCohortsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiCohortsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiCohortsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiCohortsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiCohortsStateModel>): BiCohortsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiCohortsStateModel = {
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
