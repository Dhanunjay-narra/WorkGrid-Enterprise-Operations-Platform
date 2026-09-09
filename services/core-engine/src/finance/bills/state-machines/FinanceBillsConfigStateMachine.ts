export type FinanceBillsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsConfigStateMachine {
  private allowedTransitions: Record<FinanceBillsConfigState, FinanceBillsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsConfigState, to: FinanceBillsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsConfigState, to: FinanceBillsConfigState): FinanceBillsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
