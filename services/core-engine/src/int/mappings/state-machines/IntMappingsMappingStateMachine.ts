export type IntMappingsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsMappingStateMachine {
  private allowedTransitions: Record<IntMappingsMappingState, IntMappingsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsMappingState, to: IntMappingsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsMappingState, to: IntMappingsMappingState): IntMappingsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
