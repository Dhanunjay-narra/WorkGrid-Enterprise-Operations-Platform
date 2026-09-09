import { SupportSlaSessionModel, SupportSlaSessionValidator } from "@nexora/types/domains/support/sla/SupportSlaSession";

export class SupportSlaSessionService {
  private repository = new Map<string, SupportSlaSessionModel>();

  public create(data: Omit<SupportSlaSessionModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaSessionModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaSessionModel>): SupportSlaSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaSessionModel = {
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
