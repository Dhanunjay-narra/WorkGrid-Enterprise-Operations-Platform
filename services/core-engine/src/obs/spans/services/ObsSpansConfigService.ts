import { ObsSpansConfigModel, ObsSpansConfigValidator } from "@nexora/types/domains/obs/spans/ObsSpansConfig";

export class ObsSpansConfigService {
  private repository = new Map<string, ObsSpansConfigModel>();

  public create(data: Omit<ObsSpansConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansConfigModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansConfigModel>): ObsSpansConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansConfigModel = {
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
