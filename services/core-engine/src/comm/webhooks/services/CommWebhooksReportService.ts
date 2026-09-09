import { CommWebhooksReportModel, CommWebhooksReportValidator } from "@nexora/types/domains/comm/webhooks/CommWebhooksReport";

export class CommWebhooksReportService {
  private repository = new Map<string, CommWebhooksReportModel>();

  public create(data: Omit<CommWebhooksReportModel, "id" | "version" | "createdAt" | "updatedAt">): CommWebhooksReportModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommWebhooksReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommWebhooksReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommWebhooksReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommWebhooksReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommWebhooksReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommWebhooksReportModel>): CommWebhooksReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommWebhooksReportModel = {
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
