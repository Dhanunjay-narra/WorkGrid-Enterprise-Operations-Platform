export type SecurityMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityMappingStateMachine {
  private allowedTransitions: Record<SecurityMappingState, SecurityMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityMappingState, to: SecurityMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityMappingState, to: SecurityMappingState): SecurityMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecurityMapping: " + from + " -> " + to);
    }
    return to;
  }
}
