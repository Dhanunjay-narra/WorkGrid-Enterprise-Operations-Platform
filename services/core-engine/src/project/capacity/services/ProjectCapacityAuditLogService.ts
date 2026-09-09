import { ProjectCapacityAuditLogModel, ProjectCapacityAuditLogValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityAuditLog";

export class ProjectCapacityAuditLogService {
  private repository = new Map<string, ProjectCapacityAuditLogModel>();

  public create(data: Omit<ProjectCapacityAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityAuditLogModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityAuditLogModel>): ProjectCapacityAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityAuditLogModel = {
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
