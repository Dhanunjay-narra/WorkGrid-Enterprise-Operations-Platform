import { IotThresholdsTaskModel, IotThresholdsTaskValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsTask";

export class IotThresholdsTaskService {
  private repository = new Map<string, IotThresholdsTaskModel>();

  public create(data: Omit<IotThresholdsTaskModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsTaskModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsTaskModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsTaskValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsTask: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsTaskModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsTaskModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsTaskModel>): IotThresholdsTaskModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsTaskModel = {
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
