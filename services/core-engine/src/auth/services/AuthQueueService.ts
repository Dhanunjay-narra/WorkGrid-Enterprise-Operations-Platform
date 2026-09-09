import { AuthQueueModel, AuthQueueValidator } from "@nexora/types/domains/auth/AuthQueue";

export class AuthQueueService {
  private repository = new Map<string, AuthQueueModel>();

  public create(data: Omit<AuthQueueModel, "id" | "version" | "createdAt" | "updatedAt">): AuthQueueModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthQueueModel>): AuthQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthQueueModel = {
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
