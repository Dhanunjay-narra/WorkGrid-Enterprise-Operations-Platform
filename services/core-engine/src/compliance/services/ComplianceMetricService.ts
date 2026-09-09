import { ComplianceMetricModel, ComplianceMetricValidator } from "@nexora/types/domains/compliance/ComplianceMetric";

export class ComplianceMetricService {
  private repository = new Map<string, ComplianceMetricModel>();

  public create(data: Omit<ComplianceMetricModel, "id" | "version" | "createdAt" | "updatedAt">): ComplianceMetricModel {
    const id = "comp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ComplianceMetricModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ComplianceMetricValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ComplianceMetric: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ComplianceMetricModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ComplianceMetricModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ComplianceMetricModel>): ComplianceMetricModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ComplianceMetricModel = {
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
