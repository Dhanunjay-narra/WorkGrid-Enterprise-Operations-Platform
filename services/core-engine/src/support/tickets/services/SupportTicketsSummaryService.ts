import { SupportTicketsSummaryModel, SupportTicketsSummaryValidator } from "@nexora/types/domains/support/tickets/SupportTicketsSummary";

export class SupportTicketsSummaryService {
  private repository = new Map<string, SupportTicketsSummaryModel>();

  public create(data: Omit<SupportTicketsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): SupportTicketsSummaryModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportTicketsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportTicketsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportTicketsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportTicketsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportTicketsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportTicketsSummaryModel>): SupportTicketsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportTicketsSummaryModel = {
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
