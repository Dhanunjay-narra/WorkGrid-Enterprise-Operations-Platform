import { ObsProfilingPayloadModel, ObsProfilingPayloadValidator } from "@nexora/types/domains/obs/profiling/ObsProfilingPayload";

export class ObsProfilingPayloadService {
  private repository = new Map<string, ObsProfilingPayloadModel>();

  public create(data: Omit<ObsProfilingPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProfilingPayloadModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProfilingPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProfilingPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProfilingPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProfilingPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProfilingPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProfilingPayloadModel>): ObsProfilingPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProfilingPayloadModel = {
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
