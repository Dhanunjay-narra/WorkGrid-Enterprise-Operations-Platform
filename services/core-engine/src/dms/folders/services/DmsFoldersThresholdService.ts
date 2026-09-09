import { DmsFoldersThresholdModel, DmsFoldersThresholdValidator } from "@nexora/types/domains/dms/folders/DmsFoldersThreshold";

export class DmsFoldersThresholdService {
  private repository = new Map<string, DmsFoldersThresholdModel>();

  public create(data: Omit<DmsFoldersThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersThresholdModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersThresholdModel>): DmsFoldersThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersThresholdModel = {
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
