export type CommPresenceScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceScheduleStateMachine {
  private allowedTransitions: Record<CommPresenceScheduleState, CommPresenceScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceScheduleState, to: CommPresenceScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceScheduleState, to: CommPresenceScheduleState): CommPresenceScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
