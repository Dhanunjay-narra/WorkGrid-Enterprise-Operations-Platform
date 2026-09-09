export type DmsChunksScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsChunksScheduleStateMachine {
  private allowedTransitions: Record<DmsChunksScheduleState, DmsChunksScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsChunksScheduleState, to: DmsChunksScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsChunksScheduleState, to: DmsChunksScheduleState): DmsChunksScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsChunksSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
