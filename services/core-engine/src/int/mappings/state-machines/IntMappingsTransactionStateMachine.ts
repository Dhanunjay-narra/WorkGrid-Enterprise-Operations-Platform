export type IntMappingsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntMappingsTransactionStateMachine {
  private allowedTransitions: Record<IntMappingsTransactionState, IntMappingsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntMappingsTransactionState, to: IntMappingsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntMappingsTransactionState, to: IntMappingsTransactionState): IntMappingsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntMappingsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
