import { SupportAgentsThresholdModel, SupportAgentsThresholdValidator } from "@nexora/types/domains/support/agents/SupportAgentsThreshold";

export class SupportAgentsThresholdService {
  private repository = new Map<string, SupportAgentsThresholdModel>();

  public create(data: Omit<SupportAgentsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsThresholdModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsThresholdModel>): SupportAgentsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsThresholdModel = {
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
