import { ObsSpansTaskModel, ObsSpansTaskValidator } from "@nexora/types/domains/obs/spans/ObsSpansTask";

export class ObsSpansTaskService {
  private repository = new Map<string, ObsSpansTaskModel>();

  public create(data: Omit<ObsSpansTaskModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansTaskModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansTaskModel>): ObsSpansTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansTaskModel = {
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
