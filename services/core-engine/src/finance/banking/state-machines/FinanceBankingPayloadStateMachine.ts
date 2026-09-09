export type FinanceBankingPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceBankingPayloadStateMachine {
  private allowedTransitions: Record<FinanceBankingPayloadState, FinanceBankingPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceBankingPayloadState, to: FinanceBankingPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceBankingPayloadState, to: FinanceBankingPayloadState): FinanceBankingPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceBankingPayload: " + from + " -> " + to);
    }
    return to;
  }
}
