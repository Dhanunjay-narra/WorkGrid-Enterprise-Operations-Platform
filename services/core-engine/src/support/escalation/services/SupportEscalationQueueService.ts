import { SupportEscalationQueueModel, SupportEscalationQueueValidator } from "@nexora/types/domains/support/escalation/SupportEscalationQueue";

export class SupportEscalationQueueService {
  private repository = new Map<string, SupportEscalationQueueModel>();

  public create(data: Omit<SupportEscalationQueueModel, "id" | "version" | "createdAt" | "updatedAt">): SupportEscalationQueueModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportEscalationQueueModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportEscalationQueueValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportEscalationQueue: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportEscalationQueueModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportEscalationQueueModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportEscalationQueueModel>): SupportEscalationQueueModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportEscalationQueueModel = {
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
