import { ObsLoggingAssignmentModel, ObsLoggingAssignmentValidator } from "@nexora/types/domains/obs/logging/ObsLoggingAssignment";

export class ObsLoggingAssignmentService {
  private repository = new Map<string, ObsLoggingAssignmentModel>();

  public create(data: Omit<ObsLoggingAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingAssignmentModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingAssignmentModel>): ObsLoggingAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingAssignmentModel = {
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
