import { SupportSlaSummaryModel, SupportSlaSummaryValidator } from "@nexora/types/domains/support/sla/SupportSlaSummary";

export class SupportSlaSummaryService {
  private repository = new Map<string, SupportSlaSummaryModel>();

  public create(data: Omit<SupportSlaSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaSummaryModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaSummaryModel>): SupportSlaSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaSummaryModel = {
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
