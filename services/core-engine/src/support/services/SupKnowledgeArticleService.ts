import { SupKnowledgeArticleData, SupKnowledgeArticleValidator } from "../../../../packages/types/src/domains/support/SupKnowledgeArticle";

export class SupKnowledgeArticleService {
  private repository = new Map<string, SupKnowledgeArticleData>();

  public create(data: Omit<SupKnowledgeArticleData, "id" | "createdAt" | "updatedAt">): SupKnowledgeArticleData {
    const id = "sup_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SupKnowledgeArticleData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupKnowledgeArticleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupKnowledgeArticle: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupKnowledgeArticleData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SupKnowledgeArticleData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SupKnowledgeArticleData>): SupKnowledgeArticleData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupKnowledgeArticleData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
