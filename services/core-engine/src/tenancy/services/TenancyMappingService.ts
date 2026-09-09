import { TenancyMappingModel, TenancyMappingValidator } from "@nexora/types/domains/tenancy/TenancyMapping";

export class TenancyMappingService {
  private repository = new Map<string, TenancyMappingModel>();

  public create(data: Omit<TenancyMappingModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyMappingModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyMappingModel>): TenancyMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyMappingModel = {
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
