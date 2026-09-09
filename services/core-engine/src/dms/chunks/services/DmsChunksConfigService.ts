import { DmsChunksConfigModel, DmsChunksConfigValidator } from "@nexora/types/domains/dms/chunks/DmsChunksConfig";

export class DmsChunksConfigService {
  private repository = new Map<string, DmsChunksConfigModel>();

  public create(data: Omit<DmsChunksConfigModel, "id" | "version" | "createdAt" | "updatedAt">): DmsChunksConfigModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsChunksConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsChunksConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsChunksConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsChunksConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsChunksConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsChunksConfigModel>): DmsChunksConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsChunksConfigModel = {
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
