import { SupportAgentsTaskModel, SupportAgentsTaskValidator } from "@nexora/types/domains/support/agents/SupportAgentsTask";

export class SupportAgentsTaskService {
  private repository = new Map<string, SupportAgentsTaskModel>();

  public create(data: Omit<SupportAgentsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsTaskModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsTaskModel>): SupportAgentsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsTaskModel = {
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
