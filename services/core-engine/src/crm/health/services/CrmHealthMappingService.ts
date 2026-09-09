import { CrmHealthMappingModel, CrmHealthMappingValidator } from "@nexora/types/domains/crm/health/CrmHealthMapping";

export class CrmHealthMappingService {
  private repository = new Map<string, CrmHealthMappingModel>();

  public create(data: Omit<CrmHealthMappingModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthMappingModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthMappingModel>): CrmHealthMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthMappingModel = {
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
