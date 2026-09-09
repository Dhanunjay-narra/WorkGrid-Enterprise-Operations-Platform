import { IdentityNodeModel, IdentityNodeValidator } from "@nexora/types/domains/identity/IdentityNode";

export class IdentityNodeService {
  private repository = new Map<string, IdentityNodeModel>();

  public create(data: Omit<IdentityNodeModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityNodeModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityNodeModel>): IdentityNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityNodeModel = {
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
