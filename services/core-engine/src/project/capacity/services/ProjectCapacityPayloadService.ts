import { ProjectCapacityPayloadModel, ProjectCapacityPayloadValidator } from "@nexora/types/domains/project/capacity/ProjectCapacityPayload";

export class ProjectCapacityPayloadService {
  private repository = new Map<string, ProjectCapacityPayloadModel>();

  public create(data: Omit<ProjectCapacityPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): ProjectCapacityPayloadModel {
    const id = "proj_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ProjectCapacityPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ProjectCapacityPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ProjectCapacityPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ProjectCapacityPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ProjectCapacityPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ProjectCapacityPayloadModel>): ProjectCapacityPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ProjectCapacityPayloadModel = {
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
