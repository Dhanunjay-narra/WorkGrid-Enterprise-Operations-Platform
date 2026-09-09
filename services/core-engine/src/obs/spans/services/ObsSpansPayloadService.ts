import { ObsSpansPayloadModel, ObsSpansPayloadValidator } from "@nexora/types/domains/obs/spans/ObsSpansPayload";

export class ObsSpansPayloadService {
  private repository = new Map<string, ObsSpansPayloadModel>();

  public create(data: Omit<ObsSpansPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): ObsSpansPayloadModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsSpansPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsSpansPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsSpansPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsSpansPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsSpansPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsSpansPayloadModel>): ObsSpansPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsSpansPayloadModel = {
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
