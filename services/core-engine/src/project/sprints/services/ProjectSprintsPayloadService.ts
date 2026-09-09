import { ProjectSprintsPayloadModel, ProjectSprintsPayloadValidator } from "@nexora/types/domains/project/sprints/ProjectSprintsPayload";

export class ProjectSprintsPayloadService {
  private repository = new Map<string, ProjectSprintsPayloadModel>();

  public create(data: Omit<ProjectSprintsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectSprintsPayloadModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectSprintsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectSprintsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectSprintsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectSprintsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectSprintsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectSprintsPayloadModel>): ProjectSprintsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectSprintsPayloadModel = {
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
