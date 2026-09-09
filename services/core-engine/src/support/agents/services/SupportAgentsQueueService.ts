import { SupportAgentsQueueModel, SupportAgentsQueueValidator } from "@nexora/types/domains/support/agents/SupportAgentsQueue";

export class SupportAgentsQueueService {
  private repository = new Map<string, SupportAgentsQueueModel>();

  public create(data: Omit<SupportAgentsQueueModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsQueueModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsQueueModel>): SupportAgentsQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsQueueModel = {
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
