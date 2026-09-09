import { SupportAgentsSummaryModel, SupportAgentsSummaryValidator } from "@nexora/types/domains/support/agents/SupportAgentsSummary";

export class SupportAgentsSummaryService {
  private repository = new Map<string, SupportAgentsSummaryModel>();

  public create(data: Omit<SupportAgentsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsSummaryModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsSummaryModel>): SupportAgentsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsSummaryModel = {
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
