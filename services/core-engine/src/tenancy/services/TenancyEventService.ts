import { TenancyEventModel, TenancyEventValidator } from "@nexora/types/domains/tenancy/TenancyEvent";

export class TenancyEventService {
  private repository = new Map<string, TenancyEventModel>();

  public create(data: Omit<TenancyEventModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyEventModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyEventModel>): TenancyEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyEventModel = {
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
