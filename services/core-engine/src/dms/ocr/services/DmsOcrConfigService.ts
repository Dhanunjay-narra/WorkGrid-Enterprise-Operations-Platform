import { DmsOcrConfigModel, DmsOcrConfigValidator } from "@nexora/types/domains/dms/ocr/DmsOcrConfig";

export class DmsOcrConfigService {
  private repository = new Map<string, DmsOcrConfigModel>();

  public create(data: Omit<DmsOcrConfigModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrConfigModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrConfigModel>): DmsOcrConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrConfigModel = {
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
