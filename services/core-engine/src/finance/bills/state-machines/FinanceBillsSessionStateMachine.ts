export type FinanceBillsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBillsSessionStateMachine {
  private allowedTransitions: Record<FinanceBillsSessionState, FinanceBillsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBillsSessionState, to: FinanceBillsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBillsSessionState, to: FinanceBillsSessionState): FinanceBillsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBillsSession: " + from + " -> " + to);
    }
    return to;
  }
}
