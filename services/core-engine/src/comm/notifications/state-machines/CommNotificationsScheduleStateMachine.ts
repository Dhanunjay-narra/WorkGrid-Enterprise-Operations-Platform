export type CommNotificationsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsScheduleStateMachine {
  private allowedTransitions: Record<CommNotificationsScheduleState, CommNotificationsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsScheduleState, to: CommNotificationsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsScheduleState, to: CommNotificationsScheduleState): CommNotificationsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
