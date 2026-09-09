import { CrmHealthProfileModel, CrmHealthProfileValidator } from "@nexora/types/domains/crm/health/CrmHealthProfile";

export class CrmHealthProfileService {
  private repository = new Map<string, CrmHealthProfileModel>();

  public create(data: Omit<CrmHealthProfileModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthProfileModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthProfileModel>): CrmHealthProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthProfileModel = {
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
