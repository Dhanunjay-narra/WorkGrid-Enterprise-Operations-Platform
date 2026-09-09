import { CommChannelsSummaryModel, CommChannelsSummaryValidator } from "@nexora/types/domains/comm/channels/CommChannelsSummary";

export class CommChannelsSummaryService {
  private repository = new Map<string, CommChannelsSummaryModel>();

  public create(data: Omit<CommChannelsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsSummaryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsSummaryModel>): CommChannelsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsSummaryModel = {
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
