import { ObsTracingPayloadModel, ObsTracingPayloadValidator } from "@nexora/types/domains/obs/tracing/ObsTracingPayload";

export class ObsTracingPayloadService {
  private repository = new Map<string, ObsTracingPayloadModel>();

  public create(data: Omit<ObsTracingPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): ObsTracingPayloadModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsTracingPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsTracingPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsTracingPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsTracingPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsTracingPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsTracingPayloadModel>): ObsTracingPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsTracingPayloadModel = {
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
