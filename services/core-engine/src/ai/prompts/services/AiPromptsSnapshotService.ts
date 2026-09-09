import { AiPromptsSnapshotModel, AiPromptsSnapshotValidator } from "@nexora/types/domains/ai/prompts/AiPromptsSnapshot";

export class AiPromptsSnapshotService {
  private repository = new Map<string, AiPromptsSnapshotModel>();

  public create(data: Omit<AiPromptsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): AiPromptsSnapshotModel {
    const id = "ai_p_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiPromptsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiPromptsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiPromptsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiPromptsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiPromptsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiPromptsSnapshotModel>): AiPromptsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiPromptsSnapshotModel = {
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
