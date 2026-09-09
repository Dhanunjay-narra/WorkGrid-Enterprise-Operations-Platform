import { ObsMetricsAssignmentModel, ObsMetricsAssignmentValidator } from "@nexora/types/domains/obs/metrics/ObsMetricsAssignment";

export class ObsMetricsAssignmentService {
  private repository = new Map<string, ObsMetricsAssignmentModel>();

  public create(data: Omit<ObsMetricsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): ObsMetricsAssignmentModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsMetricsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsMetricsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsMetricsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsMetricsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsMetricsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsMetricsAssignmentModel>): ObsMetricsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsMetricsAssignmentModel = {
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
