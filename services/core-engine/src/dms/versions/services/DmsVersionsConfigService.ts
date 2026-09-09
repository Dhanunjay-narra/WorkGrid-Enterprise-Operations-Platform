import { DmsVersionsConfigModel, DmsVersionsConfigValidator } from "@nexora/types/domains/dms/versions/DmsVersionsConfig";

export class DmsVersionsConfigService {
  private repository = new Map<string, DmsVersionsConfigModel>();

  public create(data: Omit<DmsVersionsConfigModel, "id" | "version" | "createdAt" | "updatedAt">): DmsVersionsConfigModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsVersionsConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsVersionsConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsVersionsConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsVersionsConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsVersionsConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsVersionsConfigModel>): DmsVersionsConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsVersionsConfigModel = {
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
