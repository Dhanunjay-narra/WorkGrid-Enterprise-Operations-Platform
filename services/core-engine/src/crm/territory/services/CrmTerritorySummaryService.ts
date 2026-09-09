import { CrmTerritorySummaryModel, CrmTerritorySummaryValidator } from "@nexora/types/domains/crm/territory/CrmTerritorySummary";

export class CrmTerritorySummaryService {
  private repository = new Map<string, CrmTerritorySummaryModel>();

  public create(data: Omit<CrmTerritorySummaryModel, "id" | "version" | "createdAt" | "updatedAt">): CrmTerritorySummaryModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmTerritorySummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmTerritorySummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmTerritorySummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmTerritorySummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmTerritorySummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmTerritorySummaryModel>): CrmTerritorySummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmTerritorySummaryModel = {
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
