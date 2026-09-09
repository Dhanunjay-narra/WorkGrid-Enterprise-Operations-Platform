import { BiExportsSummaryModel, BiExportsSummaryValidator } from "@nexora/types/domains/bi/exports/BiExportsSummary";

export class BiExportsSummaryService {
  private repository = new Map<string, BiExportsSummaryModel>();

  public create(data: Omit<BiExportsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsSummaryModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsSummaryModel>): BiExportsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsSummaryModel = {
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
