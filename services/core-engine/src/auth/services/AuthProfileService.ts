import { AuthProfileModel, AuthProfileValidator } from "@nexora/types/domains/auth/AuthProfile";

export class AuthProfileService {
  private repository = new Map<string, AuthProfileModel>();

  public create(data: Omit<AuthProfileModel, "id" | "version" | "createdAt" | "updatedAt">): AuthProfileModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthProfileModel>): AuthProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthProfileModel = {
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
