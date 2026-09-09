import { CommMessagesReportModel, CommMessagesReportValidator } from "@nexora/types/domains/comm/messages/CommMessagesReport";

export class CommMessagesReportService {
  private repository = new Map<string, CommMessagesReportModel>();

  public create(data: Omit<CommMessagesReportModel, "id" | "version" | "createdAt" | "updatedAt">): CommMessagesReportModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommMessagesReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommMessagesReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommMessagesReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommMessagesReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommMessagesReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommMessagesReportModel>): CommMessagesReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommMessagesReportModel = {
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
