import { ProjectTasksAuditLogModel, ProjectTasksAuditLogValidator } from "@nexora/types/domains/project/tasks/ProjectTasksAuditLog";

export class ProjectTasksAuditLogService {
  private repository = new Map<string, ProjectTasksAuditLogModel>();

  public create(data: Omit<ProjectTasksAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectTasksAuditLogModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectTasksAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectTasksAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectTasksAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectTasksAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectTasksAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectTasksAuditLogModel>): ProjectTasksAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectTasksAuditLogModel = {
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
