export type CommMessagesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommMessagesScheduleStateMachine {
  private allowedTransitions: Record<CommMessagesScheduleState, CommMessagesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommMessagesScheduleState, to: CommMessagesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommMessagesScheduleState, to: CommMessagesScheduleState): CommMessagesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommMessagesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
