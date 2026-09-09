export type FinanceTaxesPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesPayloadStateMachine {
  private allowedTransitions: Record<FinanceTaxesPayloadState, FinanceTaxesPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesPayloadState, to: FinanceTaxesPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesPayloadState, to: FinanceTaxesPayloadState): FinanceTaxesPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesPayload: " + from + " -> " + to);
    }
    return to;
  }
}
