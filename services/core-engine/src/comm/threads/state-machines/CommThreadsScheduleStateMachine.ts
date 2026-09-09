export type CommThreadsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommThreadsScheduleStateMachine {
  private allowedTransitions: Record<CommThreadsScheduleState, CommThreadsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommThreadsScheduleState, to: CommThreadsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommThreadsScheduleState, to: CommThreadsScheduleState): CommThreadsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommThreadsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
