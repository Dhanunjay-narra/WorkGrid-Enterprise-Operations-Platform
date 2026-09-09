import { CommNotificationsReportModel, CommNotificationsReportValidator } from "@nexora/types/domains/comm/notifications/CommNotificationsReport";

export class CommNotificationsReportService {
  private repository = new Map<string, CommNotificationsReportModel>();

  public create(data: Omit<CommNotificationsReportModel, "id" | "version" | "createdAt" | "updatedAt">): CommNotificationsReportModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommNotificationsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommNotificationsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommNotificationsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommNotificationsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommNotificationsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommNotificationsReportModel>): CommNotificationsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommNotificationsReportModel = {
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
