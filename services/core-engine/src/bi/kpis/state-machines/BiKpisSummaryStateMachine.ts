export type BiKpisSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiKpisSummaryStateMachine {
  private allowedTransitions: Record<BiKpisSummaryState, BiKpisSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiKpisSummaryState, to: BiKpisSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiKpisSummaryState, to: BiKpisSummaryState): BiKpisSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiKpisSummary: " + from + " -> " + to);
    }
    return to;
  }
}
