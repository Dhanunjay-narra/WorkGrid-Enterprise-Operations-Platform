import { SupportCsatQueueModel, SupportCsatQueueValidator } from "@nexora/types/domains/support/csat/SupportCsatQueue";

export class SupportCsatQueueService {
  private repository = new Map<string, SupportCsatQueueModel>();

  public create(data: Omit<SupportCsatQueueModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatQueueModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatQueueModel>): SupportCsatQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatQueueModel = {
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
