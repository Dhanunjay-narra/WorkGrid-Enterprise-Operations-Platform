import { IntMappingsReportModel, IntMappingsReportValidator } from "@nexora/types/domains/int/mappings/IntMappingsReport";

export class IntMappingsReportService {
  private repository = new Map<string, IntMappingsReportModel>();

  public create(data: Omit<IntMappingsReportModel, "id" | "version" | "createdAt" | "updatedAt">): IntMappingsReportModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntMappingsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntMappingsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntMappingsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntMappingsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntMappingsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntMappingsReportModel>): IntMappingsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntMappingsReportModel = {
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
