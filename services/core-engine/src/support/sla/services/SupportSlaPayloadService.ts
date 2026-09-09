import { SupportSlaPayloadModel, SupportSlaPayloadValidator } from "@nexora/types/domains/support/sla/SupportSlaPayload";

export class SupportSlaPayloadService {
  private repository = new Map<string, SupportSlaPayloadModel>();

  public create(data: Omit<SupportSlaPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaPayloadModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaPayloadModel>): SupportSlaPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaPayloadModel = {
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
