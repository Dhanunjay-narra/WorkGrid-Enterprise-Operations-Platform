import { ObsProbesTaskModel, ObsProbesTaskValidator } from "@nexora/types/domains/obs/probes/ObsProbesTask";

export class ObsProbesTaskService {
  private repository = new Map<string, ObsProbesTaskModel>();

  public create(data: Omit<ObsProbesTaskModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesTaskModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesTaskModel>): ObsProbesTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesTaskModel = {
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
