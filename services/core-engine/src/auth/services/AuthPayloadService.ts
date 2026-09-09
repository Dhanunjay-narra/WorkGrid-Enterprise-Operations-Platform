import { AuthPayloadModel, AuthPayloadValidator } from "@nexora/types/domains/auth/AuthPayload";

export class AuthPayloadService {
  private repository = new Map<string, AuthPayloadModel>();

  public create(data: Omit<AuthPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): AuthPayloadModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthPayloadModel>): AuthPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthPayloadModel = {
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
