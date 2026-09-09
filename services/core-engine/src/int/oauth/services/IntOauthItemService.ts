import { IntOauthItemModel, IntOauthItemValidator } from "@nexora/types/domains/int/oauth/IntOauthItem";

export class IntOauthItemService {
  private repository = new Map<string, IntOauthItemModel>();

  public create(data: Omit<IntOauthItemModel, "id" | "version" | "createdAt" | "updatedAt">): IntOauthItemModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntOauthItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntOauthItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntOauthItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntOauthItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntOauthItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntOauthItemModel>): IntOauthItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntOauthItemModel = {
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
