import { EvtReplayJobData, EvtReplayJobValidator } from "../../../../packages/types/src/domains/events/EvtReplayJob";

export class EvtReplayJobService {
  private repository = new Map<string, EvtReplayJobData>();

  public create(data: Omit<EvtReplayJobData, "id" | "createdAt" | "updatedAt">): EvtReplayJobData {
    const id = "eve_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: EvtReplayJobData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = EvtReplayJobValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for EvtReplayJob: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): EvtReplayJobData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): EvtReplayJobData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<EvtReplayJobData>): EvtReplayJobData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: EvtReplayJobData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
