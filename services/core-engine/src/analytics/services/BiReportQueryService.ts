import { BiReportQueryData, BiReportQueryValidator } from "../../../../packages/types/src/domains/analytics/BiReportQuery";

export class BiReportQueryService {
  private repository = new Map<string, BiReportQueryData>();

  public create(data: Omit<BiReportQueryData, "id" | "createdAt" | "updatedAt">): BiReportQueryData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiReportQueryData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiReportQueryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiReportQuery: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiReportQueryData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiReportQueryData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiReportQueryData>): BiReportQueryData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiReportQueryData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
