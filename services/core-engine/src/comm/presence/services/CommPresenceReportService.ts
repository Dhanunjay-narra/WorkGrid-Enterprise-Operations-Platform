import { CommPresenceReportModel, CommPresenceReportValidator } from "@nexora/types/domains/comm/presence/CommPresenceReport";

export class CommPresenceReportService {
  private repository = new Map<string, CommPresenceReportModel>();

  public create(data: Omit<CommPresenceReportModel, "id" | "version" | "createdAt" | "updatedAt">): CommPresenceReportModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommPresenceReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommPresenceReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommPresenceReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommPresenceReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommPresenceReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommPresenceReportModel>): CommPresenceReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommPresenceReportModel = {
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
