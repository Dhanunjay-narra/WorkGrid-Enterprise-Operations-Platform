import { SupportQueuesItemModel, SupportQueuesItemValidator } from "@nexora/types/domains/support/queues/SupportQueuesItem";

export class SupportQueuesItemService {
  private repository = new Map<string, SupportQueuesItemModel>();

  public create(data: Omit<SupportQueuesItemModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesItemModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesItemModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesItemValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesItem: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesItemModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesItemModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesItemModel>): SupportQueuesItemModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesItemModel = {
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
