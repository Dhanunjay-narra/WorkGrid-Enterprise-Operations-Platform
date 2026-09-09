import { AiToolsReportModel, AiToolsReportValidator } from "@nexora/types/domains/ai/tools/AiToolsReport";

export class AiToolsReportService {
  private repository = new Map<string, AiToolsReportModel>();

  public create(data: Omit<AiToolsReportModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsReportModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsReportModel>): AiToolsReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsReportModel = {
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
