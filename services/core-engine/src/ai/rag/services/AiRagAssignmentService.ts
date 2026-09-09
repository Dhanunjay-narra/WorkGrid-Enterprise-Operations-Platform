import { AiRagAssignmentModel, AiRagAssignmentValidator } from "@nexora/types/domains/ai/rag/AiRagAssignment";

export class AiRagAssignmentService {
  private repository = new Map<string, AiRagAssignmentModel>();

  public create(data: Omit<AiRagAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): AiRagAssignmentModel {
    const id = "ai_r_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiRagAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiRagAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiRagAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiRagAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiRagAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiRagAssignmentModel>): AiRagAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiRagAssignmentModel = {
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
