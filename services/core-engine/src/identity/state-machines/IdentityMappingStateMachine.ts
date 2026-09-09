export type IdentityMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IdentityMappingStateMachine {
  private allowedTransitions: Record<IdentityMappingState, IdentityMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IdentityMappingState, to: IdentityMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IdentityMappingState, to: IdentityMappingState): IdentityMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IdentityMapping: " + from + " -> " + to);
    }
    return to;
  }
}
