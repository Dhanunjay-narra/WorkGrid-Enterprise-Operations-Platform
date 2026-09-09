import { ObsAlertsAssignmentModel, ObsAlertsAssignmentValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsAssignment";

export class ObsAlertsAssignmentService {
  private repository = new Map<string, ObsAlertsAssignmentModel>();

  public create(data: Omit<ObsAlertsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsAssignmentModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsAssignmentModel>): ObsAlertsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsAssignmentModel = {
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
