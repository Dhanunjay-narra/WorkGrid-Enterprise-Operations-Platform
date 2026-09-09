import { ObsTracingTaskModel, ObsTracingTaskValidator } from "@nexora/types/domains/obs/tracing/ObsTracingTask";

export class ObsTracingTaskService {
  private repository = new Map<string, ObsTracingTaskModel>();

  public create(data: Omit<ObsTracingTaskModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingTaskModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingTaskModel>): ObsTracingTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingTaskModel = {
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
