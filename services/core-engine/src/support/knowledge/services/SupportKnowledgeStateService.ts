import { SupportKnowledgeStateModel, SupportKnowledgeStateValidator } from "@nexora/types/domains/support/knowledge/SupportKnowledgeState";

export class SupportKnowledgeStateService {
  private repository = new Map<string, SupportKnowledgeStateModel>();

  public create(data: Omit<SupportKnowledgeStateModel, "id" | "version" | "createdAt" | "updatedAt">): SupportKnowledgeStateModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportKnowledgeStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportKnowledgeStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportKnowledgeState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportKnowledgeStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportKnowledgeStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportKnowledgeStateModel>): SupportKnowledgeStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportKnowledgeStateModel = {
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
