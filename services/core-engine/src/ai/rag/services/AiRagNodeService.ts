import { AiRagNodeModel, AiRagNodeValidator } from "@nexora/types/domains/ai/rag/AiRagNode";

export class AiRagNodeService {
  private repository = new Map<string, AiRagNodeModel>();

  public create(data: Omit<AiRagNodeModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagNodeModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagNodeModel>): AiRagNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagNodeModel = {
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
