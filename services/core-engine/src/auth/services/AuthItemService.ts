import { AuthItemModel, AuthItemValidator } from "@nexora/types/domains/auth/AuthItem";

export class AuthItemService {
  private repository = new Map<string, AuthItemModel>();

  public create(data: Omit<AuthItemModel, "id" | "version" | "createdAt" | "updatedAt">): AuthItemModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthItemModel>): AuthItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthItemModel = {
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
