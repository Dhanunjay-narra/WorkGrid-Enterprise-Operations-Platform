import { RbacRecordModel, RbacRecordValidator } from "@nexora/types/domains/rbac/RbacRecord";

export class RbacRecordService {
  private repository = new Map<string, RbacRecordModel>();

  public create(data: Omit<RbacRecordModel, "id" | "version" | "createdAt" | "updatedAt">): RbacRecordModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacRecordModel>): RbacRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacRecordModel = {
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
