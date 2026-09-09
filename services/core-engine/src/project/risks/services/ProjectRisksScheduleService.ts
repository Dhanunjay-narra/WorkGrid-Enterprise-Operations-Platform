import { ProjectRisksScheduleModel, ProjectRisksScheduleValidator } from "@nexora/types/domains/project/risks/ProjectRisksSchedule";

export class ProjectRisksScheduleService {
  private repository = new Map<string, ProjectRisksScheduleModel>();

  public create(data: Omit<ProjectRisksScheduleModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksScheduleModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksScheduleModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksScheduleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksSchedule: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksScheduleModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksScheduleModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksScheduleModel>): ProjectRisksScheduleModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksScheduleModel = {
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
