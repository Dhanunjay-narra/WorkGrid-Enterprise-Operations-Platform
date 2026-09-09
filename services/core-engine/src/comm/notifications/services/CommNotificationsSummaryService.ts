import { CommNotificationsSummaryModel, CommNotificationsSummaryValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsSummary";

export class CommNotificationsSummaryService {
  private repository = new Map<string, CommNotificationsSummaryModel>();

  public create(data: Omit<CommNotificationsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsSummaryModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsSummaryModel>): CommNotificationsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsSummaryModel = {
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
