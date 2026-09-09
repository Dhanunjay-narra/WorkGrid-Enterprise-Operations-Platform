export type IdentitySessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentitySessionStateMachine {
  private allowedTransitions: Record<IdentitySessionState, IdentitySessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentitySessionState, to: IdentitySessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentitySessionState, to: IdentitySessionState): IdentitySessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentitySession: " + from + " -> " + to);
    }
    return to;
  }
}
