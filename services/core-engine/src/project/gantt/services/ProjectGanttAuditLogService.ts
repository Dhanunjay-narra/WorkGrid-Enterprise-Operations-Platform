import { ProjectGanttAuditLogModel, ProjectGanttAuditLogValidator } from "@nexora/types/domains/project/gantt/ProjectGanttAuditLog";

export class ProjectGanttAuditLogService {
  private repository = new Map<string, ProjectGanttAuditLogModel>();

  public create(data: Omit<ProjectGanttAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttAuditLogModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttAuditLogModel>): ProjectGanttAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttAuditLogModel = {
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
