export type CommNotificationsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommNotificationsSessionStateMachine {
  private allowedTransitions: Record<CommNotificationsSessionState, CommNotificationsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommNotificationsSessionState, to: CommNotificationsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommNotificationsSessionState, to: CommNotificationsSessionState): CommNotificationsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommNotificationsSession: " + from + " -> " + to);
    }
    return to;
  }
}
