import { ObsSpansMappingModel, ObsSpansMappingValidator } from "@nexora/types/domains/obs/spans/ObsSpansMapping";

export class ObsSpansMappingService {
  private repository = new Map<string, ObsSpansMappingModel>();

  public create(data: Omit<ObsSpansMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansMappingModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansMappingModel>): ObsSpansMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansMappingModel = {
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
