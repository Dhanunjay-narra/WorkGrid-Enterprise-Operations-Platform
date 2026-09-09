import { SupportQueuesThresholdModel, SupportQueuesThresholdValidator } from "@nexora/types/domains/support/queues/SupportQueuesThreshold";

export class SupportQueuesThresholdService {
  private repository = new Map<string, SupportQueuesThresholdModel>();

  public create(data: Omit<SupportQueuesThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesThresholdModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesThresholdModel>): SupportQueuesThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesThresholdModel = {
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
