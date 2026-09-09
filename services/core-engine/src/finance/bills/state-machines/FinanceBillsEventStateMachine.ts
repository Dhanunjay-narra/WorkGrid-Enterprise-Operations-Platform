export type FinanceBillsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsEventStateMachine {
  private allowedTransitions: Record<FinanceBillsEventState, FinanceBillsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsEventState, to: FinanceBillsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsEventState, to: FinanceBillsEventState): FinanceBillsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
