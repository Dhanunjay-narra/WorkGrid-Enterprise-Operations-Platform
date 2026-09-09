import { ProjectRisksPayloadModel, ProjectRisksPayloadValidator } from "@nexora/types/domains/project/risks/ProjectRisksPayload";

export class ProjectRisksPayloadService {
  private repository = new Map<string, ProjectRisksPayloadModel>();

  public create(data: Omit<ProjectRisksPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectRisksPayloadModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectRisksPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectRisksPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectRisksPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectRisksPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectRisksPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectRisksPayloadModel>): ProjectRisksPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectRisksPayloadModel = {
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
