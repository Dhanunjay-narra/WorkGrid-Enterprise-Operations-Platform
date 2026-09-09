export type CommPresenceConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CommPresenceConfigStateMachine {
  private allowedTransitions: Record<CommPresenceConfigState, CommPresenceConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CommPresenceConfigState, to: CommPresenceConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CommPresenceConfigState, to: CommPresenceConfigState): CommPresenceConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CommPresenceConfig: " + from + " -> " + to);
    }
    return to;
  }
}
