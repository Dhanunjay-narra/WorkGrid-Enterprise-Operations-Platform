import { AbacQueueModel, AbacQueueValidator } from "@nexora/types/domains/abac/AbacQueue";

export class AbacQueueService {
  private repository = new Map<string, AbacQueueModel>();

  public create(data: Omit<AbacQueueModel, "id" | "version" | "createdAt" | "updatedAt">): AbacQueueModel {
    const id = "abac_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AbacQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AbacQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AbacQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AbacQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AbacQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AbacQueueModel>): AbacQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AbacQueueModel = {
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
