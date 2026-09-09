import { TenancyQueueModel, TenancyQueueValidator } from "@nexora/types/domains/tenancy/TenancyQueue";

export class TenancyQueueService {
  private repository = new Map<string, TenancyQueueModel>();

  public create(data: Omit<TenancyQueueModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyQueueModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyQueueModel>): TenancyQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyQueueModel = {
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
