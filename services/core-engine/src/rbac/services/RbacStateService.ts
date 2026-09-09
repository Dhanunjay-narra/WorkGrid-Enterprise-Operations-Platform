import { RbacStateModel, RbacStateValidator } from "@nexora/types/domains/rbac/RbacState";

export class RbacStateService {
  private repository = new Map<string, RbacStateModel>();

  public create(data: Omit<RbacStateModel, "id" | "version" | "createdAt" | "updatedAt">): RbacStateModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacStateModel>): RbacStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacStateModel = {
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
