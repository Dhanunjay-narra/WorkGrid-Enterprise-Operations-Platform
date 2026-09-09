import { AiToolsSnapshotModel, AiToolsSnapshotValidator } from "@nexora/types/domains/ai/tools/AiToolsSnapshot";

export class AiToolsSnapshotService {
  private repository = new Map<string, AiToolsSnapshotModel>();

  public create(data: Omit<AiToolsSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): AiToolsSnapshotModel {
    const id = "ai_t_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AiToolsSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AiToolsSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AiToolsSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AiToolsSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AiToolsSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AiToolsSnapshotModel>): AiToolsSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AiToolsSnapshotModel = {
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
