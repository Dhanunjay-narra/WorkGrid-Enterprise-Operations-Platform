export type IdentityEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityEventStateMachine {
  private allowedTransitions: Record<IdentityEventState, IdentityEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityEventState, to: IdentityEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityEventState, to: IdentityEventState): IdentityEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityEvent: " + from + " -> " + to);
    }
    return to;
  }
}
