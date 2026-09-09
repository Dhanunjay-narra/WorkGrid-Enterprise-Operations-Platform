import { SupportQueuesSessionModel, SupportQueuesSessionValidator } from "@nexora/types/domains/support/queues/SupportQueuesSession";

export class SupportQueuesSessionService {
  private repository = new Map<string, SupportQueuesSessionModel>();

  public create(data: Omit<SupportQueuesSessionModel, "id" | "version" | "createdAt" | "updatedAt">): SupportQueuesSessionModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportQueuesSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportQueuesSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportQueuesSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportQueuesSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportQueuesSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportQueuesSessionModel>): SupportQueuesSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportQueuesSessionModel = {
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
