import { AiGatewayReportModel, AiGatewayReportValidator } from "@nexora/types/domains/ai/gateway/AiGatewayReport";

export class AiGatewayReportService {
  private repository = new Map<string, AiGatewayReportModel>();

  public create(data: Omit<AiGatewayReportModel, "id" | "version" | "createdAt" | "updatedAt">): AiGatewayReportModel {
    const id = "ai_g_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiGatewayReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiGatewayReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiGatewayReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiGatewayReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiGatewayReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiGatewayReportModel>): AiGatewayReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiGatewayReportModel = {
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
