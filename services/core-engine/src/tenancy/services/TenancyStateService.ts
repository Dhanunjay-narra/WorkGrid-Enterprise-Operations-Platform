import { TenancyStateModel, TenancyStateValidator } from "@nexora/types/domains/tenancy/TenancyState";

export class TenancyStateService {
  private repository = new Map<string, TenancyStateModel>();

  public create(data: Omit<TenancyStateModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyStateModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyStateModel>): TenancyStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyStateModel = {
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
