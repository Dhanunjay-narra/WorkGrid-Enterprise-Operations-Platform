import { TenancyThresholdModel, TenancyThresholdValidator } from "@nexora/types/domains/tenancy/TenancyThreshold";

export class TenancyThresholdService {
  private repository = new Map<string, TenancyThresholdModel>();

  public create(data: Omit<TenancyThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyThresholdModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyThresholdModel>): TenancyThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyThresholdModel = {
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
