export type CommCallsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommCallsScheduleStateMachine {
  private allowedTransitions: Record<CommCallsScheduleState, CommCallsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommCallsScheduleState, to: CommCallsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommCallsScheduleState, to: CommCallsScheduleState): CommCallsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommCallsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
