import { CrmLeadsMappingModel, CrmLeadsMappingValidator } from "@nexora/types/domains/crm/leads/CrmLeadsMapping";

export class CrmLeadsMappingService {
  private repository = new Map<string, CrmLeadsMappingModel>();

  public create(data: Omit<CrmLeadsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): CrmLeadsMappingModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmLeadsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmLeadsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmLeadsMappingModel>): CrmLeadsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadsMappingModel = {
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
