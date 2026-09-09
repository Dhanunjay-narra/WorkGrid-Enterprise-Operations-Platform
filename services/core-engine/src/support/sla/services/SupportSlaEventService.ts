import { SupportSlaEventModel, SupportSlaEventValidator } from "@nexora/types/domains/support/sla/SupportSlaEvent";

export class SupportSlaEventService {
  private repository = new Map<string, SupportSlaEventModel>();

  public create(data: Omit<SupportSlaEventModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaEventModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaEventModel>): SupportSlaEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaEventModel = {
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
