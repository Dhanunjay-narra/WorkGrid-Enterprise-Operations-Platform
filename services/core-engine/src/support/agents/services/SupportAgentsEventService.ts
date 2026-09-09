import { SupportAgentsEventModel, SupportAgentsEventValidator } from "@nexora/types/domains/support/agents/SupportAgentsEvent";

export class SupportAgentsEventService {
  private repository = new Map<string, SupportAgentsEventModel>();

  public create(data: Omit<SupportAgentsEventModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsEventModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsEventModel>): SupportAgentsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsEventModel = {
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
