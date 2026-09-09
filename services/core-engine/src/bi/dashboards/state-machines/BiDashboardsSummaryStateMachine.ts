export type BiDashboardsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiDashboardsSummaryStateMachine {
  private allowedTransitions: Record<BiDashboardsSummaryState, BiDashboardsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiDashboardsSummaryState, to: BiDashboardsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiDashboardsSummaryState, to: BiDashboardsSummaryState): BiDashboardsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiDashboardsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
