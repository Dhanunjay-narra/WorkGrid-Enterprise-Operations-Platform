import { DmsFilesConfigModel, DmsFilesConfigValidator } from "@nexora/types/domains/dms/files/DmsFilesConfig";

export class DmsFilesConfigService {
  private repository = new Map<string, DmsFilesConfigModel>();

  public create(data: Omit<DmsFilesConfigModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesConfigModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesConfigModel>): DmsFilesConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesConfigModel = {
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
