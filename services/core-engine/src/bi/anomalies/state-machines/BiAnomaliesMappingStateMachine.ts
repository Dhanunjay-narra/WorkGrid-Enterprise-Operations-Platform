export type BiAnomaliesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesMappingStateMachine {
  private allowedTransitions: Record<BiAnomaliesMappingState, BiAnomaliesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesMappingState, to: BiAnomaliesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesMappingState, to: BiAnomaliesMappingState): BiAnomaliesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
