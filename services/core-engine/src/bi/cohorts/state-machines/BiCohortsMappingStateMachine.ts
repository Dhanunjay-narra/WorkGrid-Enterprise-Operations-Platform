export type BiCohortsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsMappingStateMachine {
  private allowedTransitions: Record<BiCohortsMappingState, BiCohortsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsMappingState, to: BiCohortsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsMappingState, to: BiCohortsMappingState): BiCohortsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
