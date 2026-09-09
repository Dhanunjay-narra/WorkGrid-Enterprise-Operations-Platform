export type IntSlackScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSlackScheduleStateMachine {
  private allowedTransitions: Record<IntSlackScheduleState, IntSlackScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSlackScheduleState, to: IntSlackScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSlackScheduleState, to: IntSlackScheduleState): IntSlackScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSlackSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
