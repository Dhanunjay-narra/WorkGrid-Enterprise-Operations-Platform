import { ObsDashboardsAssignmentModel, ObsDashboardsAssignmentValidator } from "@nexora/types/domains/obs/dashboards/ObsDashboardsAssignment";

export class ObsDashboardsAssignmentService {
  private repository = new Map<string, ObsDashboardsAssignmentModel>();

  public create(data: Omit<ObsDashboardsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): ObsDashboardsAssignmentModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsDashboardsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsDashboardsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsDashboardsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsDashboardsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsDashboardsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsDashboardsAssignmentModel>): ObsDashboardsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsDashboardsAssignmentModel = {
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
