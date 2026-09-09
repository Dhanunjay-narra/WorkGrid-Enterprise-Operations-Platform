export type IdentityProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityProfileStateMachine {
  private allowedTransitions: Record<IdentityProfileState, IdentityProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityProfileState, to: IdentityProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityProfileState, to: IdentityProfileState): IdentityProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityProfile: " + from + " -> " + to);
    }
    return to;
  }
}
