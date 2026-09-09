import { CrmHealthEventModel, CrmHealthEventValidator } from "@nexora/types/domains/crm/health/CrmHealthEvent";

export class CrmHealthEventService {
  private repository = new Map<string, CrmHealthEventModel>();

  public create(data: Omit<CrmHealthEventModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthEventModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthEventModel>): CrmHealthEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthEventModel = {
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
