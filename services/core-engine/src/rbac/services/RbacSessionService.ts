import { RbacSessionModel, RbacSessionValidator } from "@nexora/types/domains/rbac/RbacSession";

export class RbacSessionService {
  private repository = new Map<string, RbacSessionModel>();

  public create(data: Omit<RbacSessionModel, "id" | "version" | "createdAt" | "updatedAt">): RbacSessionModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacSessionModel>): RbacSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacSessionModel = {
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
