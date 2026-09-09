export type BiCohortsSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiCohortsSummaryStateMachine {
  private allowedTransitions: Record<BiCohortsSummaryState, BiCohortsSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiCohortsSummaryState, to: BiCohortsSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiCohortsSummaryState, to: BiCohortsSummaryState): BiCohortsSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiCohortsSummary: " + from + " -> " + to);
    }
    return to;
  }
}
