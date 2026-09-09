export type CommPresenceStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceStateStateMachine {
  private allowedTransitions: Record<CommPresenceStateState, CommPresenceStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceStateState, to: CommPresenceStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceStateState, to: CommPresenceStateState): CommPresenceStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceState: " + from + " -> " + to);
    }
    return to;
  }
}
