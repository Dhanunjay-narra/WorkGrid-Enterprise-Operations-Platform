import { CrmDealsStateModel, CrmDealsStateValidator } from "@nexora/types/domains/crm/deals/CrmDealsState";

export class CrmDealsStateService {
  private repository = new Map<string, CrmDealsStateModel>();

  public create(data: Omit<CrmDealsStateModel, "id" | "version" | "createdAt" | "updatedAt">): CrmDealsStateModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmDealsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmDealsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmDealsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmDealsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmDealsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmDealsStateModel>): CrmDealsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmDealsStateModel = {
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
