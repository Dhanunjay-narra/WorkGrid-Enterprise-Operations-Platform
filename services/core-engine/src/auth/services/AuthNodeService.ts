import { AuthNodeModel, AuthNodeValidator } from "@nexora/types/domains/auth/AuthNode";

export class AuthNodeService {
  private repository = new Map<string, AuthNodeModel>();

  public create(data: Omit<AuthNodeModel, "id" | "version" | "createdAt" | "updatedAt">): AuthNodeModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthNodeModel>): AuthNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthNodeModel = {
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
