import { CrmHealthEntryModel, CrmHealthEntryValidator } from "@nexora/types/domains/crm/health/CrmHealthEntry";

export class CrmHealthEntryService {
  private repository = new Map<string, CrmHealthEntryModel>();

  public create(data: Omit<CrmHealthEntryModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthEntryModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthEntryModel>): CrmHealthEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthEntryModel = {
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
