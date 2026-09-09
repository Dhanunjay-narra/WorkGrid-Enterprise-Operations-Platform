import { CrmDealsMappingModel, CrmDealsMappingValidator } from "@nexora/types/domains/crm/deals/CrmDealsMapping";

export class CrmDealsMappingService {
  private repository = new Map<string, CrmDealsMappingModel>();

  public create(data: Omit<CrmDealsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): CrmDealsMappingModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmDealsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmDealsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmDealsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmDealsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmDealsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmDealsMappingModel>): CrmDealsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmDealsMappingModel = {
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
