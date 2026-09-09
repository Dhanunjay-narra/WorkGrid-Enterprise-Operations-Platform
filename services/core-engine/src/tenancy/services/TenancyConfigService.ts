import { TenancyConfigModel, TenancyConfigValidator } from "@nexora/types/domains/tenancy/TenancyConfig";

export class TenancyConfigService {
  private repository = new Map<string, TenancyConfigModel>();

  public create(data: Omit<TenancyConfigModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyConfigModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyConfigModel>): TenancyConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyConfigModel = {
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
