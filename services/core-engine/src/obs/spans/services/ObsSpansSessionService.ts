import { ObsSpansSessionModel, ObsSpansSessionValidator } from "@nexora/types/domains/obs/spans/ObsSpansSession";

export class ObsSpansSessionService {
  private repository = new Map<string, ObsSpansSessionModel>();

  public create(data: Omit<ObsSpansSessionModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansSessionModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansSessionModel>): ObsSpansSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansSessionModel = {
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
