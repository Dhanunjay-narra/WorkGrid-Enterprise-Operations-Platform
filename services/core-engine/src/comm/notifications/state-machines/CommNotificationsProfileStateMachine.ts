export type CommNotificationsProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsProfileStateMachine {
  private allowedTransitions: Record<CommNotificationsProfileState, CommNotificationsProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsProfileState, to: CommNotificationsProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsProfileState, to: CommNotificationsProfileState): CommNotificationsProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsProfile: " + from + " -> " + to);
    }
    return to;
  }
}
