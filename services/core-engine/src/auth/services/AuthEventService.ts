import { AuthEventModel, AuthEventValidator } from "@nexora/types/domains/auth/AuthEvent";

export class AuthEventService {
  private repository = new Map<string, AuthEventModel>();

  public create(data: Omit<AuthEventModel, "id" | "version" | "createdAt" | "updatedAt">): AuthEventModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthEventModel>): AuthEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthEventModel = {
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
