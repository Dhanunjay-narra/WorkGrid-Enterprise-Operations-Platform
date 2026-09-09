import { ObsSpansQueueModel, ObsSpansQueueValidator } from "@nexora/types/domains/obs/spans/ObsSpansQueue";

export class ObsSpansQueueService {
  private repository = new Map<string, ObsSpansQueueModel>();

  public create(data: Omit<ObsSpansQueueModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansQueueModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansQueueModel>): ObsSpansQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansQueueModel = {
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
