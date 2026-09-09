import { IdentityMappingModel, IdentityMappingValidator } from "@nexora/types/domains/identity/IdentityMapping";

export class IdentityMappingService {
  private repository = new Map<string, IdentityMappingModel>();

  public create(data: Omit<IdentityMappingModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityMappingModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityMappingModel>): IdentityMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityMappingModel = {
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
