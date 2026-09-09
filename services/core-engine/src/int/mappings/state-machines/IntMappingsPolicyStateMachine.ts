export type IntMappingsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsPolicyStateMachine {
  private allowedTransitions: Record<IntMappingsPolicyState, IntMappingsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsPolicyState, to: IntMappingsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsPolicyState, to: IntMappingsPolicyState): IntMappingsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
