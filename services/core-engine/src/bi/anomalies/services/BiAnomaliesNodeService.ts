import { BiAnomaliesNodeModel, BiAnomaliesNodeValidator } from "@nexora/types/domains/bi/anomalies/BiAnomaliesNode";

export class BiAnomaliesNodeService {
  private repository = new Map<string, BiAnomaliesNodeModel>();

  public create(data: Omit<BiAnomaliesNodeModel, "id" | "version" | "createdAt" | "updatedAt">): BiAnomaliesNodeModel {
    const id = "bi_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiAnomaliesNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiAnomaliesNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiAnomaliesNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiAnomaliesNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiAnomaliesNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiAnomaliesNodeModel>): BiAnomaliesNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiAnomaliesNodeModel = {
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
