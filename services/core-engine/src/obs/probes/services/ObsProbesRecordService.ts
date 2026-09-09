import { ObsProbesRecordModel, ObsProbesRecordValidator } from "@nexora/types/domains/obs/probes/ObsProbesRecord";

export class ObsProbesRecordService {
  private repository = new Map<string, ObsProbesRecordModel>();

  public create(data: Omit<ObsProbesRecordModel, "id" | "version" | "createdAt" | "updatedAt">): ObsProbesRecordModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsProbesRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsProbesRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsProbesRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsProbesRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsProbesRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsProbesRecordModel>): ObsProbesRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsProbesRecordModel = {
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
