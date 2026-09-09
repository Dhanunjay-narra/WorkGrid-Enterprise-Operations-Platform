import { IdentityQueueModel, IdentityQueueValidator } from "@nexora/types/domains/identity/IdentityQueue";

export class IdentityQueueService {
  private repository = new Map<string, IdentityQueueModel>();

  public create(data: Omit<IdentityQueueModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityQueueModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityQueueModel>): IdentityQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityQueueModel = {
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
