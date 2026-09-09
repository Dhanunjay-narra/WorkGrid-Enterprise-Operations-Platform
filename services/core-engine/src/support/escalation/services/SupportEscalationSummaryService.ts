import { SupportEscalationSummaryModel, SupportEscalationSummaryValidator } from "@nexora/types/domains/support/escalation/SupportEscalationSummary";

export class SupportEscalationSummaryService {
  private repository = new Map<string, SupportEscalationSummaryModel>();

  public create(data: Omit<SupportEscalationSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationSummaryModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationSummaryModel>): SupportEscalationSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationSummaryModel = {
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
