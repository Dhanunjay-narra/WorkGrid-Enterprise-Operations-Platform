import { IdentityEventModel, IdentityEventValidator } from "@nexora/types/domains/identity/IdentityEvent";

export class IdentityEventService {
  private repository = new Map<string, IdentityEventModel>();

  public create(data: Omit<IdentityEventModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityEventModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityEventModel>): IdentityEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityEventModel = {
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
