export type IntMappingsBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsBatchStateMachine {
  private allowedTransitions: Record<IntMappingsBatchState, IntMappingsBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsBatchState, to: IntMappingsBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsBatchState, to: IntMappingsBatchState): IntMappingsBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsBatch: " + from + " -> " + to);
    }
    return to;
  }
}
