import { SupportCsatEventModel, SupportCsatEventValidator } from "@nexora/types/domains/support/csat/SupportCsatEvent";

export class SupportCsatEventService {
  private repository = new Map<string, SupportCsatEventModel>();

  public create(data: Omit<SupportCsatEventModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatEventModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatEventModel>): SupportCsatEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatEventModel = {
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
