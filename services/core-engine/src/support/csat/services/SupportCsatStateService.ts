import { SupportCsatStateModel, SupportCsatStateValidator } from "@nexora/types/domains/support/csat/SupportCsatState";

export class SupportCsatStateService {
  private repository = new Map<string, SupportCsatStateModel>();

  public create(data: Omit<SupportCsatStateModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatStateModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatStateModel>): SupportCsatStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatStateModel = {
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
