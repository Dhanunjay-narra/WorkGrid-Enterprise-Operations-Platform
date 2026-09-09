import { CrmContactsMetricModel, CrmContactsMetricValidator } from "@nexora/types/domains/crm/contacts/CrmContactsMetric";

export class CrmContactsMetricService {
  private repository = new Map<string, CrmContactsMetricModel>();

  public create(data: Omit<CrmContactsMetricModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsMetricModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsMetricModel>): CrmContactsMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsMetricModel = {
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
