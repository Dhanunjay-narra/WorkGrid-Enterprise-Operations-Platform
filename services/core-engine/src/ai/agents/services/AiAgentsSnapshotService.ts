import { AiAgentsSnapshotModel, AiAgentsSnapshotValidator } from "@nexora/types/domains/ai/agents/AiAgentsSnapshot";

export class AiAgentsSnapshotService {
  private repository = new Map<string, AiAgentsSnapshotModel>();

  public create(data: Omit<AiAgentsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): AiAgentsSnapshotModel {
    const id = "ai_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiAgentsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiAgentsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiAgentsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiAgentsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiAgentsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiAgentsSnapshotModel>): AiAgentsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiAgentsSnapshotModel = {
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
