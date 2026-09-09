import { CrmContactsMappingModel, CrmContactsMappingValidator } from "@nexora/types/domains/crm/contacts/CrmContactsMapping";

export class CrmContactsMappingService {
  private repository = new Map<string, CrmContactsMappingModel>();

  public create(data: Omit<CrmContactsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsMappingModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsMappingModel>): CrmContactsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsMappingModel = {
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
