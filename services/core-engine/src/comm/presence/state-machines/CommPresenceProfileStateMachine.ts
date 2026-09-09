export type CommPresenceProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceProfileStateMachine {
  private allowedTransitions: Record<CommPresenceProfileState, CommPresenceProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceProfileState, to: CommPresenceProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceProfileState, to: CommPresenceProfileState): CommPresenceProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceProfile: " + from + " -> " + to);
    }
    return to;
  }
}
