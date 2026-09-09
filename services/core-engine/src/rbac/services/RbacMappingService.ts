import { RbacMappingModel, RbacMappingValidator } from "@nexora/types/domains/rbac/RbacMapping";

export class RbacMappingService {
  private repository = new Map<string, RbacMappingModel>();

  public create(data: Omit<RbacMappingModel, "id" | "version" | "createdAt" | "updatedAt">): RbacMappingModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacMappingModel>): RbacMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacMappingModel = {
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
