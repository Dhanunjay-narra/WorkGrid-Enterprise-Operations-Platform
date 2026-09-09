import { SupportKnowledgePayloadModel, SupportKnowledgePayloadValidator } from "@nexora/types/domains/support/knowledge/SupportKnowledgePayload";

export class SupportKnowledgePayloadService {
  private repository = new Map<string, SupportKnowledgePayloadModel>();

  public create(data: Omit<SupportKnowledgePayloadModel, "id" | "version" | "createdAt" | "updatedAt">): SupportKnowledgePayloadModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportKnowledgePayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportKnowledgePayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportKnowledgePayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportKnowledgePayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportKnowledgePayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportKnowledgePayloadModel>): SupportKnowledgePayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportKnowledgePayloadModel = {
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
