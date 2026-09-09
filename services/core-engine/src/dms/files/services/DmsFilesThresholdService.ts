import { DmsFilesThresholdModel, DmsFilesThresholdValidator } from "@nexora/types/domains/dms/files/DmsFilesThreshold";

export class DmsFilesThresholdService {
  private repository = new Map<string, DmsFilesThresholdModel>();

  public create(data: Omit<DmsFilesThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesThresholdModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesThresholdModel>): DmsFilesThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesThresholdModel = {
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
