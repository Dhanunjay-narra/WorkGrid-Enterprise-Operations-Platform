export type CommPresenceItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceItemStateMachine {
  private allowedTransitions: Record<CommPresenceItemState, CommPresenceItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceItemState, to: CommPresenceItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceItemState, to: CommPresenceItemState): CommPresenceItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceItem: " + from + " -> " + to);
    }
    return to;
  }
}
