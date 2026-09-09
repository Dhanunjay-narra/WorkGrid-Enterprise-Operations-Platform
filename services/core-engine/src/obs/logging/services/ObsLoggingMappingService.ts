import { ObsLoggingMappingModel, ObsLoggingMappingValidator } from "@nexora/types/domains/obs/logging/ObsLoggingMapping";

export class ObsLoggingMappingService {
  private repository = new Map<string, ObsLoggingMappingModel>();

  public create(data: Omit<ObsLoggingMappingModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingMappingModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingMappingModel>): ObsLoggingMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingMappingModel = {
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
