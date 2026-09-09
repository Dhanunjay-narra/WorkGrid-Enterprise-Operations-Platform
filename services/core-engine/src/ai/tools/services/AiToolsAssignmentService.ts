import { AiToolsAssignmentModel, AiToolsAssignmentValidator } from "@nexora/types/domains/ai/tools/AiToolsAssignment";

export class AiToolsAssignmentService {
  private repository = new Map<string, AiToolsAssignmentModel>();

  public create(data: Omit<AiToolsAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsAssignmentModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsAssignmentModel>): AiToolsAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsAssignmentModel = {
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
