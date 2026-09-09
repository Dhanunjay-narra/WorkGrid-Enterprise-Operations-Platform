import { ObsTracingConfigModel, ObsTracingConfigValidator } from "@nexora/types/domains/obs/tracing/ObsTracingConfig";

export class ObsTracingConfigService {
  private repository = new Map<string, ObsTracingConfigModel>();

  public create(data: Omit<ObsTracingConfigModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingConfigModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingConfigModel>): ObsTracingConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingConfigModel = {
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
