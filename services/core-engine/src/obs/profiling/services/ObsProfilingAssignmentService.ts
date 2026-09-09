import { ObsProfilingAssignmentModel, ObsProfilingAssignmentValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingAssignment";

export class ObsProfilingAssignmentService {
  private repository = new Map<string, ObsProfilingAssignmentModel>();

  public create(data: Omit<ObsProfilingAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingAssignmentModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingAssignmentModel>): ObsProfilingAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingAssignmentModel = {
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
