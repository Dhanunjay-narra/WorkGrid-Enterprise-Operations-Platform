import { BiExportsThresholdModel, BiExportsThresholdValidator } from "@nexora/types/domains/bi/exports/BiExportsThreshold";

export class BiExportsThresholdService {
  private repository = new Map<string, BiExportsThresholdModel>();

  public create(data: Omit<BiExportsThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): BiExportsThresholdModel {
    const id = "bi_e_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiExportsThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportsThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportsThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportsThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiExportsThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiExportsThresholdModel>): BiExportsThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportsThresholdModel = {
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
