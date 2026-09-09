import { CrmDealsProfileModel, CrmDealsProfileValidator } from "@nexora/types/domains/crm/deals/CrmDealsProfile";

export class CrmDealsProfileService {
  private repository = new Map<string, CrmDealsProfileModel>();

  public create(data: Omit<CrmDealsProfileModel, "id" | "version" | "createdAt" | "updatedAt">): CrmDealsProfileModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmDealsProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmDealsProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmDealsProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmDealsProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmDealsProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmDealsProfileModel>): CrmDealsProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmDealsProfileModel = {
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
