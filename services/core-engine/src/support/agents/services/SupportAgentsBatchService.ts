import { SupportAgentsBatchModel, SupportAgentsBatchValidator } from "@nexora/types/domains/support/agents/SupportAgentsBatch";

export class SupportAgentsBatchService {
  private repository = new Map<string, SupportAgentsBatchModel>();

  public create(data: Omit<SupportAgentsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): SupportAgentsBatchModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportAgentsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportAgentsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportAgentsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportAgentsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportAgentsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportAgentsBatchModel>): SupportAgentsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportAgentsBatchModel = {
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
