export type CrmForecastingMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmForecastingMappingStateMachine {
  private allowedTransitions: Record<CrmForecastingMappingState, CrmForecastingMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmForecastingMappingState, to: CrmForecastingMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmForecastingMappingState, to: CrmForecastingMappingState): CrmForecastingMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmForecastingMapping: " + from + " -> " + to);
    }
    return to;
  }
}
