import { SupportAgentsConfigModel, SupportAgentsConfigValidator } from "@nexora/types/domains/support/agents/SupportAgentsConfig";

export class SupportAgentsConfigService {
  private repository = new Map<string, SupportAgentsConfigModel>();

  public create(data: Omit<SupportAgentsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsConfigModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsConfigModel>): SupportAgentsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsConfigModel = {
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
