import { CommChannelsReportModel, CommChannelsReportValidator } from "@nexora/types/domains/comm/channels/CommChannelsReport";

export class CommChannelsReportService {
  private repository = new Map<string, CommChannelsReportModel>();

  public create(data: Omit<CommChannelsReportModel, "id" | "version" | "createdAt" | "updatedAt">): CommChannelsReportModel {
    const id = "comm_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CommChannelsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CommChannelsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CommChannelsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CommChannelsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CommChannelsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CommChannelsReportModel>): CommChannelsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CommChannelsReportModel = {
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
