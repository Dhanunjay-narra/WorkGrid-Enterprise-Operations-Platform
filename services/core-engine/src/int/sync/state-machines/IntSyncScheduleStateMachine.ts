export type IntSyncScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSyncScheduleStateMachine {
  private allowedTransitions: Record<IntSyncScheduleState, IntSyncScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSyncScheduleState, to: IntSyncScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSyncScheduleState, to: IntSyncScheduleState): IntSyncScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSyncSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
