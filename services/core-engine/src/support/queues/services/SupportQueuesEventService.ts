import { SupportQueuesEventModel, SupportQueuesEventValidator } from "@nexora/types/domains/support/queues/SupportQueuesEvent";

export class SupportQueuesEventService {
  private repository = new Map<string, SupportQueuesEventModel>();

  public create(data: Omit<SupportQueuesEventModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesEventModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesEventModel>): SupportQueuesEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesEventModel = {
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
