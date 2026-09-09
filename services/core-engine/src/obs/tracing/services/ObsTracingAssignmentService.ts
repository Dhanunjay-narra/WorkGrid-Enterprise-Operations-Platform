import { ObsTracingAssignmentModel, ObsTracingAssignmentValidator } from "@nexora/types/domains/obs/tracing/ObsTracingAssignment";

export class ObsTracingAssignmentService {
  private repository = new Map<string, ObsTracingAssignmentModel>();

  public create(data: Omit<ObsTracingAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingAssignmentModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingAssignmentModel>): ObsTracingAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingAssignmentModel = {
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
