import { BiDashboardsPayloadModel, BiDashboardsPayloadValidator } from "@nexora/types/domains/bi/dashboards/BiDashboardsPayload";

export class BiDashboardsPayloadService {
  private repository = new Map<string, BiDashboardsPayloadModel>();

  public create(data: Omit<BiDashboardsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): BiDashboardsPayloadModel {
    const id = "bi_d_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiDashboardsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiDashboardsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiDashboardsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiDashboardsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiDashboardsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiDashboardsPayloadModel>): BiDashboardsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiDashboardsPayloadModel = {
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
