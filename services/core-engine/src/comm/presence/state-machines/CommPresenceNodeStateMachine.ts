export type CommPresenceNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceNodeStateMachine {
  private allowedTransitions: Record<CommPresenceNodeState, CommPresenceNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceNodeState, to: CommPresenceNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceNodeState, to: CommPresenceNodeState): CommPresenceNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceNode: " + from + " -> " + to);
    }
    return to;
  }
}
