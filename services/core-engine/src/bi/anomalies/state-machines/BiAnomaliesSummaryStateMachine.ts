export type BiAnomaliesSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiAnomaliesSummaryStateMachine {
  private allowedTransitions: Record<BiAnomaliesSummaryState, BiAnomaliesSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiAnomaliesSummaryState, to: BiAnomaliesSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiAnomaliesSummaryState, to: BiAnomaliesSummaryState): BiAnomaliesSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiAnomaliesSummary: " + from + " -> " + to);
    }
    return to;
  }
}
