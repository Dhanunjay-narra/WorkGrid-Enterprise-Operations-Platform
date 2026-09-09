import { IotThresholdsEventModel, IotThresholdsEventValidator } from "@nexora/types/domains/iot/thresholds/IotThresholdsEvent";

export class IotThresholdsEventService {
  private repository = new Map<string, IotThresholdsEventModel>();

  public create(data: Omit<IotThresholdsEventModel, "id" | "version" | "createdAt" | "updatedAt">): IotThresholdsEventModel {
    const id = "iot__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IotThresholdsEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IotThresholdsEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IotThresholdsEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IotThresholdsEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IotThresholdsEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IotThresholdsEventModel>): IotThresholdsEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IotThresholdsEventModel = {
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
