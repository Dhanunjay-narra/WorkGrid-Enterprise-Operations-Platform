export type IntSalesforceBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IntSalesforceBatchStateMachine {
  private allowedTransitions: Record<IntSalesforceBatchState, IntSalesforceBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IntSalesforceBatchState, to: IntSalesforceBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IntSalesforceBatchState, to: IntSalesforceBatchState): IntSalesforceBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IntSalesforceBatch: " + from + " -> " + to);
    }
    return to;
  }
}
