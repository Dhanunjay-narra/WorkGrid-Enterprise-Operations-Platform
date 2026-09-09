import { ObsSpansEventModel, ObsSpansEventValidator } from "@nexora/types/domains/obs/spans/ObsSpansEvent";

export class ObsSpansEventService {
  private repository = new Map<string, ObsSpansEventModel>();

  public create(data: Omit<ObsSpansEventModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansEventModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansEventModel>): ObsSpansEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansEventModel = {
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
