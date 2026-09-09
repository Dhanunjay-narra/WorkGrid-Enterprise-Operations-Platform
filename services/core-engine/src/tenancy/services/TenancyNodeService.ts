import { TenancyNodeModel, TenancyNodeValidator } from "@nexora/types/domains/tenancy/TenancyNode";

export class TenancyNodeService {
  private repository = new Map<string, TenancyNodeModel>();

  public create(data: Omit<TenancyNodeModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyNodeModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyNodeModel>): TenancyNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyNodeModel = {
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
