import { AiEvaluationsAssignmentModel, AiEvaluationsAssignmentValidator } from "@nexora/types/domains/ai/evaluations/AiEvaluationsAssignment";

export class AiEvaluationsAssignmentService {
  private repository = new Map<string, AiEvaluationsAssignmentModel>();

  public create(data: Omit<AiEvaluationsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): AiEvaluationsAssignmentModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEvaluationsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEvaluationsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEvaluationsAssignmentModel>): AiEvaluationsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationsAssignmentModel = {
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
