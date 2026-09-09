export type FinanceTaxesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class FinanceTaxesMappingStateMachine {
  private allowedTransitions: Record<FinanceTaxesMappingState, FinanceTaxesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: FinanceTaxesMappingState, to: FinanceTaxesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: FinanceTaxesMappingState, to: FinanceTaxesMappingState): FinanceTaxesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for FinanceTaxesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
