import { SupportKnowledgeConfigModel, SupportKnowledgeConfigValidator } from "@nexora/types/domains/support/knowledge/SupportKnowledgeConfig";

export class SupportKnowledgeConfigService {
  private repository = new Map<string, SupportKnowledgeConfigModel>();

  public create(data: Omit<SupportKnowledgeConfigModel, "id" | "version" | "createdAt" | "updatedAt">): SupportKnowledgeConfigModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportKnowledgeConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportKnowledgeConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportKnowledgeConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportKnowledgeConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportKnowledgeConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportKnowledgeConfigModel>): SupportKnowledgeConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportKnowledgeConfigModel = {
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
