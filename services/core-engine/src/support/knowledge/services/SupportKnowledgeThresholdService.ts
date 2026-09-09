import { SupportKnowledgeThresholdModel, SupportKnowledgeThresholdValidator } from "@nexora/types/domains/support/knowledge/SupportKnowledgeThreshold";

export class SupportKnowledgeThresholdService {
  private repository = new Map<string, SupportKnowledgeThresholdModel>();

  public create(data: Omit<SupportKnowledgeThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): SupportKnowledgeThresholdModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportKnowledgeThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportKnowledgeThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportKnowledgeThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportKnowledgeThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportKnowledgeThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportKnowledgeThresholdModel>): SupportKnowledgeThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportKnowledgeThresholdModel = {
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
