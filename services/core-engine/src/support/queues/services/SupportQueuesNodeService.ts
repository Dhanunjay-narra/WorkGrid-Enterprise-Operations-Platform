import { SupportQueuesNodeModel, SupportQueuesNodeValidator } from "@nexora/types/domains/support/queues/SupportQueuesNode";

export class SupportQueuesNodeService {
  private repository = new Map<string, SupportQueuesNodeModel>();

  public create(data: Omit<SupportQueuesNodeModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesNodeModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesNodeModel>): SupportQueuesNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesNodeModel = {
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
