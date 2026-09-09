export type FinanceForecastMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceForecastMappingStateMachine {
  private allowedTransitions: Record<FinanceForecastMappingState, FinanceForecastMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceForecastMappingState, to: FinanceForecastMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceForecastMappingState, to: FinanceForecastMappingState): FinanceForecastMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceForecastMapping: " + from + " -> " + to);
    }
    return to;
  }
}
