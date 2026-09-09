export type BiExportsTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsTransactionStateMachine {
  private allowedTransitions: Record<BiExportsTransactionState, BiExportsTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsTransactionState, to: BiExportsTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsTransactionState, to: BiExportsTransactionState): BiExportsTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
