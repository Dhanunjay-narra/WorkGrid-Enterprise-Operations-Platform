import { ProjectEpicsPayloadModel, ProjectEpicsPayloadValidator } from "@nexora/types/domains/project/epics/ProjectEpicsPayload";

export class ProjectEpicsPayloadService {
  private repository = new Map<string, ProjectEpicsPayloadModel>();

  public create(data: Omit<ProjectEpicsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectEpicsPayloadModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectEpicsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectEpicsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectEpicsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectEpicsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectEpicsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectEpicsPayloadModel>): ProjectEpicsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectEpicsPayloadModel = {
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
