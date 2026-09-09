export type IntMappingsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsSummaryStateMachine {
  private allowedTransitions: Record<IntMappingsSummaryState, IntMappingsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsSummaryState, to: IntMappingsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsSummaryState, to: IntMappingsSummaryState): IntMappingsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
