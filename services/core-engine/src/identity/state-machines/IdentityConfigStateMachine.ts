export type IdentityConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityConfigStateMachine {
  private allowedTransitions: Record<IdentityConfigState, IdentityConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityConfigState, to: IdentityConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityConfigState, to: IdentityConfigState): IdentityConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityConfig: " + from + " -> " + to);
    }
    return to;
  }
}
