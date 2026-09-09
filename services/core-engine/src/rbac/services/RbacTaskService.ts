import { RbacTaskModel, RbacTaskValidator } from "@nexora/types/domains/rbac/RbacTask";

export class RbacTaskService {
  private repository = new Map<string, RbacTaskModel>();

  public create(data: Omit<RbacTaskModel, "id" | "version" | "createdAt" | "updatedAt">): RbacTaskModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacTaskModel>): RbacTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacTaskModel = {
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
