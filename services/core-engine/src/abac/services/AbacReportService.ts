import { AbacReportModel, AbacReportValidator } from "@nexora/types/domains/abac/AbacReport";

export class AbacReportService {
  private repository = new Map<string, AbacReportModel>();

  public create(data: Omit<AbacReportModel, "id" | "version" | "createdAt" | "updatedAt">): AbacReportModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacReportModel>): AbacReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacReportModel = {
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
