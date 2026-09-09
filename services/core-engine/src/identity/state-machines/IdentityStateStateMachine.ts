export type IdentityStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityStateStateMachine {
  private allowedTransitions: Record<IdentityStateState, IdentityStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityStateState, to: IdentityStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityStateState, to: IdentityStateState): IdentityStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityState: " + from + " -> " + to);
    }
    return to;
  }
}
