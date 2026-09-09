export type FinanceBillsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsThresholdStateMachine {
  private allowedTransitions: Record<FinanceBillsThresholdState, FinanceBillsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsThresholdState, to: FinanceBillsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsThresholdState, to: FinanceBillsThresholdState): FinanceBillsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
