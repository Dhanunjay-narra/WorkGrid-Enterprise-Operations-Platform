import { BiAnomaliesQueueModel, BiAnomaliesQueueValidator } from "@nexora/types/domains/bi/anomalies/BiAnomaliesQueue";

export class BiAnomaliesQueueService {
  private repository = new Map<string, BiAnomaliesQueueModel>();

  public create(data: Omit<BiAnomaliesQueueModel, "id" | "version" | "createdAt" | "updatedAt">): BiAnomaliesQueueModel {
    const id = "bi_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiAnomaliesQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiAnomaliesQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiAnomaliesQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiAnomaliesQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiAnomaliesQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiAnomaliesQueueModel>): BiAnomaliesQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiAnomaliesQueueModel = {
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
