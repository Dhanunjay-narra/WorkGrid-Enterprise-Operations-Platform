import { RbacReportModel, RbacReportValidator } from "@nexora/types/domains/rbac/RbacReport";

export class RbacReportService {
  private repository = new Map<string, RbacReportModel>();

  public create(data: Omit<RbacReportModel, "id" | "version" | "createdAt" | "updatedAt">): RbacReportModel {
    const id = "rbac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: RbacReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = RbacReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for RbacReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): RbacReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: RbacReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<RbacReportModel>): RbacReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: RbacReportModel = {
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
