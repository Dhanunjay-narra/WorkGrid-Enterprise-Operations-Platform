import { ProjectRisksAuditLogModel, ProjectRisksAuditLogValidator } from "@nexora/types/domains/project/risks/ProjectRisksAuditLog";

export class ProjectRisksAuditLogService {
  private repository = new Map<string, ProjectRisksAuditLogModel>();

  public create(data: Omit<ProjectRisksAuditLogModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksAuditLogModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksAuditLogModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksAuditLogValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksAuditLog: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksAuditLogModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksAuditLogModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksAuditLogModel>): ProjectRisksAuditLogModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksAuditLogModel = {
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
