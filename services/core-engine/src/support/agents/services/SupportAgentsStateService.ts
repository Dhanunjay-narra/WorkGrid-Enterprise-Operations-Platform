import { SupportAgentsStateModel, SupportAgentsStateValidator } from "@nexora/types/domains/support/agents/SupportAgentsState";

export class SupportAgentsStateService {
  private repository = new Map<string, SupportAgentsStateModel>();

  public create(data: Omit<SupportAgentsStateModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsStateModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsStateModel>): SupportAgentsStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsStateModel = {
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
