import { CrmContactsReportModel, CrmContactsReportValidator } from "@nexora/types/domains/crm/contacts/CrmContactsReport";

export class CrmContactsReportService {
  private repository = new Map<string, CrmContactsReportModel>();

  public create(data: Omit<CrmContactsReportModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsReportModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsReportModel>): CrmContactsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsReportModel = {
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
