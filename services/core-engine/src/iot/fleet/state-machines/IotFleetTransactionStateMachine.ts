export type IotFleetTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetTransactionStateMachine {
  private allowedTransitions: Record<IotFleetTransactionState, IotFleetTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetTransactionState, to: IotFleetTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetTransactionState, to: IotFleetTransactionState): IotFleetTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
