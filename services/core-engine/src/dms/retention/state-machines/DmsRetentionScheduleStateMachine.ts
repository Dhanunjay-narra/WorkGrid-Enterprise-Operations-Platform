export type DmsRetentionScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsRetentionScheduleStateMachine {
  private allowedTransitions: Record<DmsRetentionScheduleState, DmsRetentionScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsRetentionScheduleState, to: DmsRetentionScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsRetentionScheduleState, to: DmsRetentionScheduleState): DmsRetentionScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsRetentionSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
