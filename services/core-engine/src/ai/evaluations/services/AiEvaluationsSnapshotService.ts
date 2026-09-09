import { AiEvaluationsSnapshotModel, AiEvaluationsSnapshotValidator } from "@nexora/types/domains/ai/evaluations/AiEvaluationsSnapshot";

export class AiEvaluationsSnapshotService {
  private repository = new Map<string, AiEvaluationsSnapshotModel>();

  public create(data: Omit<AiEvaluationsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): AiEvaluationsSnapshotModel {
    const id = "ai_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiEvaluationsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiEvaluationsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiEvaluationsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiEvaluationsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiEvaluationsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiEvaluationsSnapshotModel>): AiEvaluationsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiEvaluationsSnapshotModel = {
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
