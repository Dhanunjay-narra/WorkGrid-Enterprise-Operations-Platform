import { EvtStreamSnapshotData, EvtStreamSnapshotValidator } from "../../../../packages/types/src/domains/events/EvtStreamSnapshot";

export class EvtStreamSnapshotService {
  private repository = new Map<string, EvtStreamSnapshotData>();

  public create(data: Omit<EvtStreamSnapshotData, "id" | "createdAt" | "updatedAt">): EvtStreamSnapshotData {
    const id = "eve_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: EvtStreamSnapshotData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = EvtStreamSnapshotValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EvtStreamSnapshot: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EvtStreamSnapshotData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): EvtStreamSnapshotData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<EvtStreamSnapshotData>): EvtStreamSnapshotData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EvtStreamSnapshotData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
