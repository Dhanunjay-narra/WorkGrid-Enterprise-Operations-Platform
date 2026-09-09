import { ProjectGanttEntryModel, ProjectGanttEntryValidator } from "@nexora/types/domains/project/gantt/ProjectGanttEntry";

export class ProjectGanttEntryService {
  private repository = new Map<string, ProjectGanttEntryModel>();

  public create(data: Omit<ProjectGanttEntryModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectGanttEntryModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectGanttEntryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectGanttEntryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectGanttEntry: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectGanttEntryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectGanttEntryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectGanttEntryModel>): ProjectGanttEntryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectGanttEntryModel = {
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
