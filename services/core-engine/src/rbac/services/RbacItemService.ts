import { RbacItemModel, RbacItemValidator } from "@nexora/types/domains/rbac/RbacItem";

export class RbacItemService {
  private repository = new Map<string, RbacItemModel>();

  public create(data: Omit<RbacItemModel, "id" | "version" | "createdAt" | "updatedAt">): RbacItemModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacItemModel>): RbacItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacItemModel = {
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
