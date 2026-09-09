import { AuthTaskModel, AuthTaskValidator } from "@nexora/types/domains/auth/AuthTask";

export class AuthTaskService {
  private repository = new Map<string, AuthTaskModel>();

  public create(data: Omit<AuthTaskModel, "id" | "version" | "createdAt" | "updatedAt">): AuthTaskModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthTaskModel>): AuthTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthTaskModel = {
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
