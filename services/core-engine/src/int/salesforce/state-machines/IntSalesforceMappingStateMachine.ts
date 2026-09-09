export type IntSalesforceMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceMappingStateMachine {
  private allowedTransitions: Record<IntSalesforceMappingState, IntSalesforceMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceMappingState, to: IntSalesforceMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceMappingState, to: IntSalesforceMappingState): IntSalesforceMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceMapping: " + from + " -> " + to);
    }
    return to;
  }
}
