export type IntSalesforceSummaryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceSummaryStateMachine {
  private allowedTransitions: Record<IntSalesforceSummaryState, IntSalesforceSummaryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceSummaryState, to: IntSalesforceSummaryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceSummaryState, to: IntSalesforceSummaryState): IntSalesforceSummaryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceSummary: " + from + " -> " + to);
    }
    return to;
  }
}
