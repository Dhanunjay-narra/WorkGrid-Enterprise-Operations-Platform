import { SupportSlaStateModel, SupportSlaStateValidator } from "@nexora/types/domains/support/sla/SupportSlaState";

export class SupportSlaStateService {
  private repository = new Map<string, SupportSlaStateModel>();

  public create(data: Omit<SupportSlaStateModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaStateModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaStateModel>): SupportSlaStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaStateModel = {
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
