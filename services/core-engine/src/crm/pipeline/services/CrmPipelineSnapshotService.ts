import { CrmPipelineSnapshotModel, CrmPipelineSnapshotValidator } from "@nexora/types/domains/crm/pipeline/CrmPipelineSnapshot";

export class CrmPipelineSnapshotService {
  private repository = new Map<string, CrmPipelineSnapshotModel>();

  public create(data: Omit<CrmPipelineSnapshotModel, "id" | "version" | "createdAt" | "updatedAt">): CrmPipelineSnapshotModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmPipelineSnapshotModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmPipelineSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmPipelineSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmPipelineSnapshotModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmPipelineSnapshotModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmPipelineSnapshotModel>): CrmPipelineSnapshotModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmPipelineSnapshotModel = {
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
