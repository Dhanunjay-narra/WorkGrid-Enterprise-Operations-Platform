import { TenancyProfileModel, TenancyProfileValidator } from "@nexora/types/domains/tenancy/TenancyProfile";

export class TenancyProfileService {
  private repository = new Map<string, TenancyProfileModel>();

  public create(data: Omit<TenancyProfileModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyProfileModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyProfileModel>): TenancyProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyProfileModel = {
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
