import { AiPromptsAssignmentModel, AiPromptsAssignmentValidator } from "@nexora/types/domains/ai/prompts/AiPromptsAssignment";

export class AiPromptsAssignmentService {
  private repository = new Map<string, AiPromptsAssignmentModel>();

  public create(data: Omit<AiPromptsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsAssignmentModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsAssignmentModel>): AiPromptsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsAssignmentModel = {
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
