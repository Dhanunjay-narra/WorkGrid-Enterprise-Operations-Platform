import { ObsSpansStateModel, ObsSpansStateValidator } from "@nexora/types/domains/obs/spans/ObsSpansState";

export class ObsSpansStateService {
  private repository = new Map<string, ObsSpansStateModel>();

  public create(data: Omit<ObsSpansStateModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansStateModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansStateModel>): ObsSpansStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansStateModel = {
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
