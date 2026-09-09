import { SupportKnowledgePolicyModel, SupportKnowledgePolicyValidator } from "@nexora/types/domains/support/knowledge/SupportKnowledgePolicy";

export class SupportKnowledgePolicyService {
  private repository = new Map<string, SupportKnowledgePolicyModel>();

  public create(data: Omit<SupportKnowledgePolicyModel, "id" | "version" | "createdAt" | "updatedAt">): SupportKnowledgePolicyModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportKnowledgePolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportKnowledgePolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportKnowledgePolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportKnowledgePolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportKnowledgePolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportKnowledgePolicyModel>): SupportKnowledgePolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportKnowledgePolicyModel = {
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
