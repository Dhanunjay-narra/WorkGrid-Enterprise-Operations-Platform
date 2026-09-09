export type CommNotificationsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsEntryStateMachine {
  private allowedTransitions: Record<CommNotificationsEntryState, CommNotificationsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsEntryState, to: CommNotificationsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsEntryState, to: CommNotificationsEntryState): CommNotificationsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
