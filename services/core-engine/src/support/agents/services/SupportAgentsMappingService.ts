import { SupportAgentsMappingModel, SupportAgentsMappingValidator } from "@nexora/types/domains/support/agents/SupportAgentsMapping";

export class SupportAgentsMappingService {
  private repository = new Map<string, SupportAgentsMappingModel>();

  public create(data: Omit<SupportAgentsMappingModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsMappingModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsMappingModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsMappingValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsMapping: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsMappingModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsMappingModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsMappingModel>): SupportAgentsMappingModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsMappingModel = {
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
