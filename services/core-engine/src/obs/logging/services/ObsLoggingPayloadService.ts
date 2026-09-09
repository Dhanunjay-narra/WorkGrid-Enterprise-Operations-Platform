import { ObsLoggingPayloadModel, ObsLoggingPayloadValidator } from "@nexora/types/domains/obs/logging/ObsLoggingPayload";

export class ObsLoggingPayloadService {
  private repository = new Map<string, ObsLoggingPayloadModel>();

  public create(data: Omit<ObsLoggingPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): ObsLoggingPayloadModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsLoggingPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsLoggingPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsLoggingPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsLoggingPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsLoggingPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsLoggingPayloadModel>): ObsLoggingPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsLoggingPayloadModel = {
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
